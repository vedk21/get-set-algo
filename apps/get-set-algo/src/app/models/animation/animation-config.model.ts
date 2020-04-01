export interface AnimationConfig {
  loop: boolean;
  autoplay: boolean;
  duration: Duration;
  easing: string;
}

interface Duration {
  timeline: number;
  highlight: number;
  specialHighlight?: number;
}
