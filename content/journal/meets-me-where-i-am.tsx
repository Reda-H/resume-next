export const meta = {
  slug: "meets-me-where-i-am",
  title: "Building an app that meets me where I am",
  date: "2026-05-15",
  description:
    "Notes on a personal assistant app: multimodal input, single-modal output, minimal context per call, and an offline-first sync layer.",
  keywords: [
    "personal assistant app",
    "multimodal input",
    "offline-first",
    "Zustand",
    "Supabase",
    "Claude",
    "Whisper",
  ],
};

export default function Body() {
  return (
    <>
      <p className="mt-6">
        I&apos;ve been working on a personal assistant app - built for myself,
        by myself - and the thing I keep coming back to is how much friction
        disappears when you stop forcing the user into one input mode. I am the
        user here, so I get to be honest about what actually works: sometimes I
        want to talk, sometimes I want to snap a photo of a receipt or a sticky
        note, and sometimes I just want to type. The app accepts all three, and
        that single design choice has changed how often I actually use it.
      </p>
      <p className="mt-7">
        The technical side is more interesting than I expected. Audio runs
        through Whisper first to become text, then gets handed to Claude to pull
        out structured events, tasks, and expenses. Images skip the
        transcription step entirely - Claude&apos;s vision model reads
        handwritten notes and receipts directly, which felt like so good to see
        it work the first time, I didn&apos;t find the need to keep a receipt
        until that moment. Text input goes straight to Claude. Three different
        paths, but they all converge on the same structured output, which means
        the rest of the app - the preview UI, the conflict resolution, the
        calendar sync - doesn&apos;t have to care how the data got there. Even
        the data model carries this through: every expense remembers whether it
        came from audio, image, or text, so the input modality is a first-class
        citizen rather than something I throw away after parsing.
      </p>
      <p className="mt-7">
        The other half of the puzzle is context management. Each capture is a
        tiny, isolated conversation with the model - I&apos;m not maintaining a
        long-running chat, I&apos;m sending a focused prompt with just enough
        context (today&apos;s date, my recent expenses, the relevant slice of my
        schedule) to get a clean extraction. Keeping context tight is what makes
        the latency tolerable and the outputs predictable. The spending advisor
        is the one place I let context grow, because chatting about patterns in
        my spending genuinely needs the history. Everywhere else, less context
        is more.
      </p>
      <p className="mt-7">
        Sync is the part I was most nervous about and ended up happiest with.
        The app is offline-first: every mutation hits the local Zustand store
        first, so the UI updates instantly whether it worked the first time or
        not, I think there&apos;s a tendance starting with offline first lately,
        I&apos;m curious about that. Then the change gets pushed into an async
        storage box, which a background worker drains against Supabase whenever
        the network cooperates. The first implementation was to keep only a
        local storage as I don&apos;t have any other devices to sync with, but
        everytime I have to reinstall to test I would lose everying :(. If a
        push fails, it stays in the outbox and gets retried - I never lose a
        capture because of a flaky connection. On the read side, each device
        pulls all rows on startup and then subscribes to Supabase realtime
        changes, so an expense I log on my phone shows up on another device
        within a second ( I don&apos;t have any other device, but I try to think
        ahead and experiment). Conflict resolution is deliberately dumb:
        last-write-wins by updatedAt. Deletes are soft - the row stays in the
        cloud with a deleted_at timestamp so other devices learn about the
        delete on their next pull, instead of getting confused by a row that
        just vanished. None of this is novel, but the discipline of running
        every mutation through the same push / softDelete helpers means I can
        add a new entity type and get sync almost for free.
      </p>
      <p className="mt-7">
        The output side is deliberately boring, I want the app to feel as close
        to me as it can, and there&apos;s nothing better than minimal (best case
        scenario it should be just buttons for input, and I increment as I need)
        - a single UI where I review, edit, and confirm. I tried more
        conversational replies early on and hated them. When I&apos;ve already
        done the work of speaking or snapping a photo, I want to see structured
        results, at first I thought a conversational response would be great,
        but it ended up being an extra free step between me and the goal, ugh.
        Meeting me where I am also means knowing when to stop being clever and
        just show the data.
      </p>
      <p className="mt-7">
        That&apos;s really the whole thesis: multimodal input, single-modal
        output, minimal context per call, and a sync layer that never gets in my
        way. It sounds obvious written down, but every time I&apos;ve been
        tempted to deviate from it, the app got worse :).
      </p>
    </>
  );
}
