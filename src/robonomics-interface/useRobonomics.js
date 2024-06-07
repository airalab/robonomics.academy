import { inject } from "vue";

export function useRobonomics() {
  const { instance } = inject("RobonomicsProvider");
  return instance;
}
