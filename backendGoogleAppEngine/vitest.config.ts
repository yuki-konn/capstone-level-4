import { UserConfigExport } from "vitest/config";

export default {
  test: {
    globals: true, // ALLOWS THE USE OF describe, it, and expect WITHOUT IMPORTING THEM.
    watch: false, // BY DEFAULT VITEST WATCHES TEST.
  },
} as UserConfigExport;
