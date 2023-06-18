import React, { useCallback, useMemo } from "react";
import { Resizable, ResizeCallback } from "re-resizable";
import { UI } from "consts";
import { useStore } from "stores";
import styles from "./style.module.scss";

function Sidebar() {
  const sidebarWidth = useStore((state) => state.sidebarWidth);
  const setSidebarWidth = useStore((state) => state.setSidebarWidth);
  const defaultSize = useMemo(
    () => ({ width: sidebarWidth, height: "auto" }),
    []
  );
  const handleClasses = useMemo(() => ({ right: styles.handle }), []);
  const enable = useMemo(
    () => ({
      top: false,
      right: true,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    }),
    []
  );
  const handleResize = useCallback<ResizeCallback>((event, direction, ref) => {
    setSidebarWidth(ref.offsetWidth);
  }, []);

  return (
    <Resizable
      className={styles.sidebar}
      handleClasses={handleClasses}
      defaultSize={defaultSize}
      enable={enable}
      minWidth={UI.SIDEBAR_MIN_WIDTH}
      maxWidth={UI.SIDEBAR_MAX_WIDTH}
      onResize={handleResize}
    >
      sidebar
    </Resizable>
  );
}

export default Sidebar;
