"use client";

import { useEffect, useRef } from "react";
import { Select } from "@/components/NetlifyForm";

export const topics: Record<string, string> = {
  parent: "Help for my child",
  partner: "School, church or community partnership",
  volunteer: "Volunteering or mentoring",
  events: "Event updates",
  donate: "Donations and sponsorship",
  other: "Something else",
};

/** Topic select that preselects from ?topic= so shortcut buttons land on the right option. */
export function TopicSelect() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("topic");
    const sel = ref.current?.querySelector("select");
    if (key && topics[key] && sel) sel.value = topics[key];
  }, []);
  return (
    <div ref={ref}>
      <Select label="What can we help with?" name="topic" required options={Object.values(topics)} />
    </div>
  );
}
