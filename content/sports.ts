import type { Project } from "@/types/project";

export type SportsMilestone = {
  id: string;
  date: string;
  dateLabel: string;
  title: string;
  discipline: string;
  description: string;
  reflection?: string;
  photos?: Project["photos"];
  resultUrl?: string;
};

// Dates and stories are taken from the original fitness page. Add official race
// names, exact results, and photos only when you have the details to share.
export const sportsMilestones: SportsMilestone[] = [
  { id: "first-runs", date: "2016", dateLabel: "2016", title: "Finding my way into running", discipline: "Running", description: "My PE teacher inspired me to start running. It became something I could return to whenever I needed a bit of inner peace." },
  { id: "first-gym", date: "2019-12", dateLabel: "December 2019", title: "A gym habit that stuck", discipline: "Strength", description: "A friend convinced me to join the gym with a promise he never kept. The unexpected reward was a lasting love of lifting. I've been training with weights since December 2019.", reflection: "What started as a small bargain became the part of training I keep coming back to." },
  { id: "half-marathon", date: "2025-04", dateLabel: "April 2025", title: "Training with a plan", discipline: "Running", description: "Signing up for a half marathon gave my running a new structure. I started following a plan, and completing it led to the next challenge: a full Ironman." },
  { id: "ironman", date: "2025-08", dateLabel: "August 2025", title: "The Ironman chapter", discipline: "Triathlon", description: "After the half marathon, I signed up for a full Ironman in August. I spent 100 days preparing my body for around 15 hours of continuous effort.", reflection: "The biggest lesson was discovering what I really enjoyed. After that endurance block, I returned to the gym with a clearer sense of what I wanted from training." },
];
