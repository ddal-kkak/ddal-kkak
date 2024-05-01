"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from "react";
import { Toast } from "./toast";

export type ToastParams = {
  message: string;
  // TODO: 일단 임시로 삭제
  // icon?: React.ComponentType;
  variant?: "solid" | "light";
  align?: "left" | "center";
  theme?: "default" | "brand" | "primary" | "secondary" | "danger";
  second?: number;
  // TODO: 위치별로 토스트를 보여줄 수 있게
  // position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  handleClickClose?: () => void;
  isShowCloseIcon?: boolean;
};

type ToastContextType = {
  // eslint-disable-next-line no-unused-vars
  toast: (option: ToastParams) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// TODO: 위치별로 토스트를 보여줄 수 있게
// const positionVariants = cva(["fixed p-4"], {
//   variants: {
//     position: {
//       "top-right": ["top-0", "right-0"],
//       "top-left": ["top-0", "left-0"],
//       "bottom-right": ["bottom-0", "right-0"],
//       "bottom-left": ["bottom-0", "left-0"],
//     },
//   },
//   defaultVariants: {
//     position: "bottom-right",
//   },
// });

export function Toaster({ children }: PropsWithChildren) {
  const [toastList, setToastList] = useState<(ToastParams & { id: number })[]>(
    [],
  );
  const timeRef = useRef<{ [key: number]: ReturnType<typeof setTimeout> }>({});

  const removeToast = (id: number) => {
    setToastList((prev) => prev.filter((toast) => toast.id !== id));
    if (timeRef.current) {
      clearTimeout(timeRef.current[id]);
      delete timeRef.current[id];
    }
  };

  const toast = (option: ToastParams) => {
    const id = Date.now();
    const { second = 3 } = option;

    const newToast: ToastParams & { id: number } = {
      id,
      ...option,
      handleClickClose: () => {
        removeToast(id);
        option.handleClickClose?.();
      },
    };

    setToastList((prev) => [newToast, ...prev]);

    timeRef.current[id] = setTimeout(() => {
      removeToast(id);
    }, second * 1000);
  };

  return (
    <ToastContext.Provider
      value={{
        toast,
      }}
    >
      {children}
      <div className={"fixed p-4 bottom-0 right-0 space-y-2"}>
        {toastList.map(({ message, ...rest }) => (
          <Toast
            key={rest.id}
            variant={rest.variant}
            theme={rest.theme}
            align={rest.align}
            // Icon={rest.icon}
            isShowCloseIcon={rest.isShowCloseIcon}
            onClick={rest.handleClickClose as () => void}
          >
            {message}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
