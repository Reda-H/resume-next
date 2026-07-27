export const meta = {
  slug: "the-reconciler-was-the-point",
  title: "The reconciler was the point",
  date: "2026-07-27",
  description:
    "Notes on building a multi-agent travel planner: why the orchestrator won over independent agents, and how a second LLM call caught the drift the first one missed.",
  keywords: [
    "multi-agent",
    "LLM orchestration",
    "travel planner",
    "reconciler",
    "tool calling",
    "OpenRouter",
    "FastAPI",
  ],
};

export default function Body() {
  return (
    <>
      <p className="mt-6">
        For the past while I&apos;ve been building a travel-planning assistant.
        You describe a trip the way you&apos;d describe it to a friend, and the
        system goes off and finds real hotels, real flights, real things to do,
        then hands you back an actual itinerary.
      </p>
      <p className="mt-7">
        The original plan was four specialist agents — flights, hotels,
        activities, transport — with an orchestrator on top keeping them in
        line. Very tidy on a whiteboard. What I ended up building looks nothing
        like that, and I think it&apos;s better for it.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">
        The problem was never the agents. It was the state.
      </h2>
      <p className="mt-4">
        Give each agent its own loop and you&apos;ve given each agent its own
        conversation thread, its own view of the itinerary, its own context
        window. Then the user says &quot;actually, move the Lisbon leg to
        Wednesday,&quot; and now everyone needs to know. Flights re-search. The
        hotel stay slides forward. The activity schedule reshuffles.
      </p>
      <p className="mt-7">
        Four parallel LLM conversations trying to agree on the truth is a
        distributed systems problem wearing a costume. I didn&apos;t want to
        solve it, and I especially didn&apos;t want to solve it by adding
        another coordination layer on top of the coordination layer I already
        had.
      </p>
      <p className="mt-7">
        So I collapsed it. One orchestrator loop. One LLM conversation, one set
        of tool calls, one shared bundle.
      </p>
      <p className="mt-7">
        The &quot;specialists&quot; turned out to be plain async functions —{" "}
        <code>search_hotels</code>, <code>search_flights</code>,{" "}
        <code>search_activities</code> — sitting in a tool registry, dispatched
        by the orchestrator through function-calling. The orchestrator decides
        what to look for, calls the tool, gets results, and either shows the
        user some options or commits a choice to the bundle. Less elegant than
        four autonomous agents. But there is exactly one source of truth for
        the itinerary at any given moment, and every tool call writes to the
        same workspace. I&apos;ll take that trade every time.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">
        Then I found the gap
      </h2>
      <p className="mt-4">
        The orchestrator loop runs up to four turns: send messages to the LLM,
        get tool calls back, dispatch them, append the results, repeat. On the
        final turn the LLM stops calling tools and just talks.
      </p>
      <p className="mt-7">
        And that&apos;s where things quietly go wrong.
      </p>
      <p className="mt-7">
        The conversation has moved. New dates came up. A different destination. A
        budget the user mentioned in passing. But the bundle snapshot
        doesn&apos;t know any of it — maybe the LLM forgot to call the tool,
        maybe it decided the call wasn&apos;t necessary, maybe it just ran out
        of turns. Whatever the reason, the itinerary starts drifting away from
        what was actually agreed.
      </p>
      <p className="mt-7">
        The fix is a <strong>reconciler</strong>: a separate LLM call that
        fires after every orchestrator turn. It gets two things — the current
        bundle snapshot and the last twelve messages of conversation — and it
        has exactly one job. Compare them.
      </p>
      <p className="mt-7">
        Does the snapshot match what the user has actually said and agreed to?
        If not, propose a minimal patch. The patch is strict JSON, validated
        against the same Pydantic schema everything else uses, committed to the
        bundle inline so the frontend updates right away.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">
        Why I like it
      </h2>
      <p className="mt-4">
        The reconciler works because it treats the LLM as what it actually is:
        unreliable at tool-calling, genuinely good at reading a conversation and
        noticing when something&apos;s off.
      </p>
      <p className="mt-7">
        The orchestrator forgets to call <code>search_hotels</code> after the
        user picks a hotel from the list. The reconciler catches it. The user
        says &quot;you know what, let&apos;s skip Kyoto,&quot; the orchestrator
        agrees warmly in prose and never touches the bundle. The reconciler
        catches that too.
      </p>
      <p className="mt-7">
        It&apos;s a second opinion running quietly in the background, and the
        system is noticeably more correct with it than without.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">
        The hard part was telling it to do less
      </h2>
      <p className="mt-4">
        Early versions of the reconciler tried to fix everything — flights,
        hotels, activities, transport, metadata, the lot. That was a mistake,
        and the reason is simple: the reconciler has no tools. No search APIs.
        No way to verify that a hotel exists or that a flight number is real.
        All it sees is conversation text.
      </p>
      <p className="mt-7">
        So the rule became: the reconciler owns <code>trip_meta</code> —
        destinations, dates, travelers — and keeps its hands off concrete
        bookings, which belong to the dedicated picker tools.
      </p>
      <p className="mt-7">
        If the user said &quot;two nights at the Memmo,&quot; the orchestrator
        should have called <code>add_hotel_to_bundle</code>. If it
        didn&apos;t, that&apos;s a tool-calling failure. Not a reconciliation
        job. Papering over it with a reconciler patch just hides the bug
        somewhere less visible.
      </p>
      <p className="mt-7">
        What&apos;s left is what the reconciler is genuinely good at: the
        things a conversation settles on its own, without anyone needing to
        call a tool. Dates. Destinations. Budget. Pace.
      </p>

      <h2 className="font-semibold mt-10 mb-3 text-foreground">The thesis</h2>
      <p className="mt-4">
        Don&apos;t trust the LLM to manage state reliably. Give it tools, let
        it call them, and then run a second pass that catches what it missed.
      </p>
      <p className="mt-7">
        The orchestrator does the creative work — reading the user, deciding
        what to search, presenting options. The reconciler does the bookkeeping
        — checking the snapshot against the conversation and patching the drift.
      </p>
      <p className="mt-7">
        Neither one is enough on its own. Together they produce an itinerary
        that actually matches what the user asked for, which was the entire
        point.
      </p>
    </>
  );
}
