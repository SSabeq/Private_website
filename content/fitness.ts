import type { SimplePageContent } from "@/types/content";

export const fitnessContent: SimplePageContent = {
  intro: {
    eyebrow: "Fitness",
    title: "Building as an athlete: hypertrophy, ironman and sports.",
    description:
      "Thanks to my interest in sports, I also like to apply similar principles and mindset of building to my body as an athlete: training as another system: plan, execute, measure and recover with adaptation.",
  },
  sections: [
    {
      title: "Training background",
      items: [
        {
          title: "Bodybuilding and strength",
          description: "I was brought to the gym on the contingent that I would receive a 0.7L of vodka from my friend, as he would have one month of training for 1zł. I never got the vodka, but in return I received a livelong love for the gym and have been lifting weights since December 2019.",
        },
        {
          title: "Endurance and Ironman",
          description: "I was inspired to start running by my PE teacher in 2016 and running has been with me ever since and going for a run from time to time brings me much needed inner peace. It was not until I signed up for a half marathon in April 2025 that I started training with a plan and shortly after completeing it, I signed up for a full Ironman in August 2025. With 100 days of training I prepared my body for 15h of continuous effort, lost 9kg of fat for the race and realised that what I really loved was the gym and I have stuck with it ever since. ",
        },
      ],
    },
    {
      title: "Process and discipline",
      items: [
        {
          title: "Consistency",
          description: "The main overlap with engineering: repeatable actions, honest feedback, and long-term iteration.",
        },
        {
          title: "Optional progress section",
          description: "Add transformation photos, race results, training blocks, or selected metrics when you want them public.",
        },
      ],
    },
  ],
  cta: {
    title: "Fitness content can stay simple until you have real progress assets.",
    description: "The page is structured for future photos, training logs, events, and concise lessons.",
    primary: { label: "Back to Home", href: "/" },
  },
};
