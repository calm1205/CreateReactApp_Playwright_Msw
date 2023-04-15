import { test as base, expect } from "@playwright/test";
import type { MockServiceWorker } from "playwright-msw";
import { createWorkerFixture } from "playwright-msw";
import { mockHandler } from "../__mock__/handler";

const test = base.extend<{ worker: MockServiceWorker }>({
  worker: createWorkerFixture(mockHandler),
});

export { test, expect };
