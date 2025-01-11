"use client";
import React from "react";
import AnimatedTimelinePage from "../animata/progress/animatedtimeline";

export default function ExperienceTimeline() {
  return (
    <div>
      <AnimatedTimelinePage
        containerClassName=""
        customEventRender={(event) => (
          <div key={event.id} className="p-4">
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p className="text-sm text-gray-600">{event.description}</p>
            <span className="text-xs text-gray-500">{event.date}</span>
          </div>
        )}
        events={[
          {
            id: "1",
            title: "Event 1",
            description: "This is the first event",
            date: "2021-01-01",
          },
          {
            id: "2",
            title: "Event 2",
            description: "This is the second event",
            date: "2021-02-01",
          },
          {
            id: "3",
            title: "Event 3",
            description: "This is the third event",
            date: "2021-03-01",
          },
        ]}
        initialActiveIndex={-1} // No event active initially
        onEventClick={(event) => console.log("Event clicked:", event)}
        onEventHover={(event) => console.log("Event hovered:", event)}
        timelineStyles={{
          activeDotColor: "#2563eb",
          activeLineColor: "#2563eb",
          dateColor: "#6b7280",
          descriptionColor: "#374151",
          dotColor: "#d1d5db",
          dotSize: "1.0rem",
          lineColor: "#d1d5db",
          titleColor: "#111827",
        }}
        title="My Experience Timeline"
      />
    </div>
  );
}
