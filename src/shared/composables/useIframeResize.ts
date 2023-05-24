import { useElementSize, useDebounceFn } from '@vueuse/core';
import { type Ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useIframeStore } from '@/stores/iframeStore';

export const useIframeResize = () => (element: Ref<HTMLElement | null>) => {
  const { iframeName } = storeToRefs(useIframeStore());
  const { resizeIframe } = useIframeStore();

  let isActive = true;
  let inited = false;

  const { height } = useElementSize(element);

  watch(height, () => {
    if (!isActive) {
      setDocumentOverflow('auto');
      return;
    }

    if (inited && !element.value) {
      isActive = false;
      setDocumentOverflow('auto');
      return;
    }

    const interval = setInterval(() => {
      if (iframeName.value) {
        setDocumentOverflow('hidden');
        useDebouncedResize(height.value);
        clearInterval(interval);
        inited = true;
      }
    }, 100);
  });

  function setDocumentOverflow(newVal: string) {
    if (document.body.style.overflow !== newVal) {
      document.body.style.overflow = newVal;
    }
  }

  const useDebouncedResize = useDebounceFn((height?: number, width?: number) => resizeIframe(height, width), 200);
};
