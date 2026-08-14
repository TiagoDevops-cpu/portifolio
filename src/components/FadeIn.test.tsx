import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FadeIn } from "./FadeIn";
import React from "react";

// Mock IntersectionObserver for useInView
class IntersectionObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
}
Object.defineProperty(window, "IntersectionObserver", {
	writable: true,
	configurable: true,
	value: IntersectionObserver,
});

describe("FadeIn Component", () => {
	it("renders children correctly", () => {
		render(
			<FadeIn>
				<div data-testid="child-element">Test Content</div>
			</FadeIn>,
		);

		expect(screen.getByTestId("child-element")).toBeDefined();
		expect(screen.getByText("Test Content")).toBeDefined();
	});
});
