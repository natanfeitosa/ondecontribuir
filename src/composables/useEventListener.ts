import { onMounted, onUnmounted } from 'vue'

export function useEventListener(event: string, callback: Function): void;
export function useEventListener(target: HTMLElement, event: string, callback: Function): void;

export function useEventListener(...args: any[]) {
  // if you want, you can also make this
  // support selector strings as target
  const [target, event, callback] = args.length == 3 ? args : [window, ...args]
  
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}