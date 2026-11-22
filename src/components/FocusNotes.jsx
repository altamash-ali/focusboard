
import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const notes = [
  {
    number: "01/03",
    title: "Make today count.",
    description: "A little focus goes a long way.",
    task: "Reviewing tasks",
    taskStatus: "On track",
    progress: "75%",
  },
  {
    number: "02/03",
    title: "Small steps, big progress.",
    description: "Keep your priorities in view.",
    task: "Plan your priorities",
    taskStatus: "In progress",
    progress: "60%",
  },
  {
    number: "03/03",
    title: "Celebrate the wins.",
    description: "Every completed task moves you forward.",
    task: "Onboarding tasks",
    taskStatus: "Completed",
    progress: "100%",
  },
];

function FocusNotes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNote = notes[activeIndex];

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? notes.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === notes.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="focus-notes">
      <div className="focus-notes-banner">
        <div className="focus-notes-copy">
          <div className="focus-notes-meta">
            <span>FOCUS NOTES</span>
            <span>{activeNote.number}</span>
          </div>

          <h2>{activeNote.title}</h2>
          <p>{activeNote.description}</p>
        </div>

        <div className="focus-notes-visual">
          <div className="focus-mini-card">
            <div className="focus-mini-top">
              <CheckCircle2 size={13} />
              <span>{activeNote.task}</span>
            </div>

            <div className="focus-mini-progress">
              <span />
            </div>

            <div className="focus-mini-bottom">
              <span>{activeNote.taskStatus}</span>
              <strong>{activeNote.progress}</strong>
            </div>
          </div>
        </div>

        <div className="focus-notes-arrows">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous focus note"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next focus note"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FocusNotes;
