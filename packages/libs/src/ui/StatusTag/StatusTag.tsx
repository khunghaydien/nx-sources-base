import { memo, useMemo } from "react";

export type StatusTagProps<T extends string | number> = {
  status: T;
  statusMap: Record<
    T,
    {
      text: string;
      color: string;
      background: string;
    }
  >;
};

const StatusTag = <T extends string | number>({
  status,
  statusMap,
}: StatusTagProps<T>) => {
  const statusConfig = useMemo(
    () =>
      statusMap[status] ?? {
        text: "",
        color: "",
        background: "",
      },
    [status, statusMap]
  );

  const { text, color, background } = statusConfig;

  return (
    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-normal leading-5 h-7 ${color} ${background}`}>
      {text}
    </div>
  );
};

export default memo(StatusTag) as typeof StatusTag;
