interface ScrollHandler {
	init: () => void;
	cleanup?: () => void;
}

class HeroStatsHandler implements ScrollHandler {
	private statsCards: NodeListOf<Element> | null = null;
	private hasAnimated = false;
	private boundHandleScroll: (() => void) | null = null;

	init(): void {
		this.statsCards = document.querySelectorAll(".stat-card");

		if (!this.statsCards || this.statsCards.length === 0) {
			console.warn("Stats cards not found");
			return;
		}

		this.boundHandleScroll = this.handleScroll.bind(this);
		window.addEventListener("scroll", this.boundHandleScroll);
		this.handleScroll();
	}

	private handleScroll(): void {
		if (!this.statsCards || this.hasAnimated) return;

		const firstCard = this.statsCards[0] as HTMLElement;
		const rect = firstCard.getBoundingClientRect();

		// Trigger when stats are visible
		if (rect.top < window.innerHeight * 0.9) {
			this.hasAnimated = true;
			this.animateStats();
		}
	}

	private animateStats(): void {
		if (!this.statsCards) return;

		this.statsCards.forEach((card, idx) => {
			const valueElement = card.querySelector(".stat-value") as HTMLElement;
			if (!valueElement) return;

			const finalValue = valueElement.textContent || "";
			const isPercentage = finalValue.includes("%");
			const hasPlus = finalValue.includes("+");
			const numericValue = parseInt(finalValue.replace(/\D/g, ""), 10);

			if (isNaN(numericValue)) return;

			let currentValue = 0;
			const duration = 2000; // 2 seconds
			const startTime = performance.now() + idx * 150; // Stagger animation

			const animate = (currentTime: number) => {
				const elapsed = currentTime - startTime;

				if (elapsed < 0) {
					requestAnimationFrame(animate);
					return;
				}

				const progress = Math.min(elapsed / duration, 1);
				// Easing function for smooth animation
				const easeOut = 1 - Math.pow(1 - progress, 3);
				currentValue = Math.floor(easeOut * numericValue);

				let displayValue = currentValue.toString();
				if (hasPlus) displayValue += "+";
				if (isPercentage) displayValue += "%";
				if (finalValue.includes("/"))
					displayValue = finalValue.replace(/^\d+/, currentValue.toString());

				valueElement.textContent = displayValue;

				if (progress < 1) {
					requestAnimationFrame(animate);
				}
			};

			requestAnimationFrame(animate);
		});
	}

	cleanup(): void {
		if (this.boundHandleScroll) {
			window.removeEventListener("scroll", this.boundHandleScroll);
		}
	}
}

class ServicesScrollHandler implements ScrollHandler {
	private servicesSection: HTMLElement | null = null;
	private gridBackground: HTMLElement | null = null;
	private servicesTitle: HTMLElement | null = null;
	private servicesSubtitle: HTMLElement | null = null;
	private serviceCards: NodeListOf<Element> | null = null;
	private boundHandleScroll: (() => void) | null = null;

	init(): void {
		this.servicesSection = document.getElementById("services-section");
		this.gridBackground = document.getElementById("grid-background");
		this.servicesTitle = document.getElementById("services-title");
		this.servicesSubtitle = document.getElementById("services-subtitle");
		this.serviceCards = document.querySelectorAll(".service-card");

		if (
			!this.servicesSection ||
			!this.gridBackground ||
			!this.servicesTitle ||
			!this.servicesSubtitle
		) {
			console.warn("Services section elements not found");
			return;
		}

		this.boundHandleScroll = this.handleScroll.bind(this);
		window.addEventListener("scroll", this.boundHandleScroll);
		this.handleScroll();
	}

	private handleScroll(): void {
		if (
			!this.servicesSection ||
			!this.gridBackground ||
			!this.servicesTitle ||
			!this.servicesSubtitle ||
			!this.serviceCards
		)
			return;

		const rect = this.servicesSection.getBoundingClientRect();
		// Start animation when section enters viewport (80% from top)
		const triggerPoint = window.innerHeight * 0.8;
		const progress = Math.max(
			0,
			Math.min(1, (triggerPoint - rect.top) / (window.innerHeight * 0.5))
		);

		// Animated grid background
		this.gridBackground.style.transform = `translateY(${progress * -100}px)`;

		// Title fade in and slide up - appears immediately
		const titleProgress = Math.min(1, progress * 2);
		this.servicesTitle.style.opacity = titleProgress.toString();
		this.servicesTitle.style.transform = `translateY(${Math.max(
			0,
			(1 - titleProgress) * 30
		)}px)`;

		// Subtitle fade in and slide up - minimal delay
		const subtitleProgress = Math.min(1, Math.max(0, (progress - 0.05) * 2));
		this.servicesSubtitle.style.opacity = subtitleProgress.toString();
		this.servicesSubtitle.style.transform = `translateY(${Math.max(
			0,
			(1 - subtitleProgress) * 30
		)}px)`;

		// Animate each service card - appear very quickly
		this.serviceCards.forEach((card, idx) => {
			const cardProgress = Math.min(
				1,
				Math.max(0, (progress - idx * 0.03) * 1.5)
			);
			(card as HTMLElement).style.opacity = cardProgress.toString();
			(card as HTMLElement).style.transform = `translateY(${
				(1 - cardProgress) * 30
			}px)`;
		});
	}

	cleanup(): void {
		if (this.boundHandleScroll) {
			window.removeEventListener("scroll", this.boundHandleScroll);
		}
	}
}

class VideoScrollHandler implements ScrollHandler {
	private videoSection: HTMLElement | null = null;
	private videoWrapper: HTMLElement | null = null;
	private storyVideo: HTMLVideoElement | null = null;
	private playOverlay: HTMLElement | null = null;
	private isPlaying = false;
	private boundHandleScroll: (() => void) | null = null;
	private boundHandlePlayVideo: (() => void) | null = null;
	private boundHandleVideoEnd: (() => void) | null = null;

	init(): void {
		this.videoSection = document.getElementById("video-section");
		this.videoWrapper = document.getElementById("video-wrapper");
		this.storyVideo = document.getElementById(
			"story-video"
		) as HTMLVideoElement | null;
		this.playOverlay = document.getElementById("play-overlay");

		if (
			!this.videoSection ||
			!this.videoWrapper ||
			!this.storyVideo ||
			!this.playOverlay
		) {
			console.warn("Video section elements not found");
			return;
		}

		this.boundHandleScroll = this.handleScroll.bind(this);
		this.boundHandlePlayVideo = this.handlePlayVideo.bind(this);
		this.boundHandleVideoEnd = this.handleVideoEnd.bind(this);

		window.addEventListener("scroll", this.boundHandleScroll);
		this.playOverlay.addEventListener("click", this.boundHandlePlayVideo);
		this.storyVideo.addEventListener("ended", this.boundHandleVideoEnd);

		this.handleScroll();
	}

	private handleScroll(): void {
		if (!this.videoSection || !this.videoWrapper) return;

		const rect = this.videoSection.getBoundingClientRect();
		const progress = Math.max(
			0,
			Math.min(1, -rect.top / (rect.height - window.innerHeight))
		);

		// Scale and fade effect
		const scale = 0.8 + progress * 0.2;
		const opacity = Math.max(0.3, 1 - progress * 0.5);
		this.videoWrapper.style.transform = `scale(${scale})`;
		this.videoWrapper.style.opacity = opacity.toString();
	}

	private handlePlayVideo(): void {
		if (this.storyVideo && !this.isPlaying && this.playOverlay) {
			this.storyVideo.play();
			this.isPlaying = true;
			this.playOverlay.style.display = "none";
		}
	}

	private handleVideoEnd(): void {
		this.isPlaying = false;
		if (this.playOverlay) {
			this.playOverlay.style.display = "flex";
		}
	}

	cleanup(): void {
		if (this.boundHandleScroll) {
			window.removeEventListener("scroll", this.boundHandleScroll);
		}
		if (this.boundHandlePlayVideo && this.playOverlay) {
			this.playOverlay.removeEventListener("click", this.boundHandlePlayVideo);
		}
		if (this.boundHandleVideoEnd && this.storyVideo) {
			this.storyVideo.removeEventListener("ended", this.boundHandleVideoEnd);
		}
	}
}

class CarouselHandler implements ScrollHandler {
	private scrollContainer: HTMLElement | null = null;
	private scrollLeftBtn: HTMLButtonElement | null = null;
	private scrollRightBtn: HTMLButtonElement | null = null;
	private boundCheckScroll: (() => void) | null = null;
	private boundScrollLeft: (() => void) | null = null;
	private boundScrollRight: (() => void) | null = null;

	init(): void {
		this.scrollContainer = document.getElementById("stories-scroll");
		this.scrollLeftBtn = document.getElementById(
			"scroll-left"
		) as HTMLButtonElement | null;
		this.scrollRightBtn = document.getElementById(
			"scroll-right"
		) as HTMLButtonElement | null;

		if (!this.scrollContainer || !this.scrollLeftBtn || !this.scrollRightBtn) {
			console.warn("Carousel elements not found");
			return;
		}

		this.boundCheckScroll = this.checkScroll.bind(this);
		this.boundScrollLeft = () => this.scroll("left");
		this.boundScrollRight = () => this.scroll("right");

		this.scrollLeftBtn.addEventListener("click", this.boundScrollLeft);
		this.scrollRightBtn.addEventListener("click", this.boundScrollRight);
		this.scrollContainer.addEventListener("scroll", this.boundCheckScroll);
		window.addEventListener("resize", this.boundCheckScroll);

		this.checkScroll(); // Initial check
	}

	private checkScroll(): void {
		if (!this.scrollContainer || !this.scrollLeftBtn || !this.scrollRightBtn)
			return;

		const { scrollLeft, scrollWidth, clientWidth } = this.scrollContainer;
		const canScrollLeft = scrollLeft > 0;
		const canScrollRight = scrollLeft < scrollWidth - clientWidth - 10;

		this.scrollLeftBtn.disabled = !canScrollLeft;
		this.scrollRightBtn.disabled = !canScrollRight;
	}

	private scroll(direction: "left" | "right"): void {
		if (!this.scrollContainer) return;

		const scrollAmount = this.scrollContainer.clientWidth * 0.8;
		this.scrollContainer.scrollBy({
			left: direction === "left" ? -scrollAmount : scrollAmount,
			behavior: "smooth",
		});
	}

	cleanup(): void {
		if (this.scrollContainer && this.boundCheckScroll) {
			this.scrollContainer.removeEventListener("scroll", this.boundCheckScroll);
		}
		if (this.scrollLeftBtn && this.boundScrollLeft) {
			this.scrollLeftBtn.removeEventListener("click", this.boundScrollLeft);
		}
		if (this.scrollRightBtn && this.boundScrollRight) {
			this.scrollRightBtn.removeEventListener("click", this.boundScrollRight);
		}
		if (this.boundCheckScroll) {
			window.removeEventListener("resize", this.boundCheckScroll);
		}
	}
}

class ProcessScrollHandler implements ScrollHandler {
	private processSection: HTMLElement | null = null;
	private processSteps: NodeListOf<Element> | null = null;
	private boundHandleScroll: (() => void) | null = null;

	init(): void {
		this.processSection = document.getElementById("process-section");
		this.processSteps = document.querySelectorAll(".process-step");

		if (!this.processSection || this.processSteps.length === 0) {
			console.warn("Process section elements not found");
			return;
		}

		this.boundHandleScroll = this.handleScroll.bind(this);
		window.addEventListener("scroll", this.boundHandleScroll);
		this.handleScroll();
	}

	private handleScroll(): void {
		if (!this.processSection || !this.processSteps) return;

		const rect = this.processSection.getBoundingClientRect();
		// Start animation as soon as section enters viewport
		const triggerPoint = window.innerHeight * 0.9;
		const progress = Math.max(
			0,
			Math.min(1, (triggerPoint - rect.top) / (window.innerHeight * 1.5))
		);

		this.processSteps.forEach((step, idx) => {
			const stepProgress = Math.min(
				1,
				Math.max(0, (progress - idx * 0.15) * 2)
			);
			const lineProgress = Math.min(
				1,
				Math.max(0, (progress - idx * 0.15 - 0.08) * 2)
			);

			// Animate icon
			const icon = step.querySelector(".step-icon") as HTMLElement;
			if (icon) {
				icon.style.opacity = stepProgress.toString();
				icon.style.transform = `scale(${0.8 + stepProgress * 0.2})`;
			}

			// Animate content
			const content = step.querySelector(".step-content") as HTMLElement;
			if (content) {
				content.style.opacity = stepProgress.toString();
				content.style.transform = `translateX(${(1 - stepProgress) * 50}px)`;
			}

			// Animate connecting line
			const line = step.querySelector(".step-line") as HTMLElement;
			if (line) {
				line.style.transform = `scaleY(${lineProgress})`;
			}
		});
	}

	cleanup(): void {
		if (this.boundHandleScroll) {
			window.removeEventListener("scroll", this.boundHandleScroll);
		}
	}
}

class TestimonialsScrollHandler implements ScrollHandler {
	private testimonialsSection: HTMLElement | null = null;
	private testimonialsBg: HTMLElement | null = null;
	private testimonialCards: NodeListOf<Element> | null = null;
	private boundHandleScroll: (() => void) | null = null;

	init(): void {
		this.testimonialsSection = document.getElementById("testimonials-section");
		this.testimonialsBg = document.getElementById("testimonials-bg");
		this.testimonialCards = document.querySelectorAll(".testimonial-card");

		if (
			!this.testimonialsSection ||
			!this.testimonialsBg ||
			this.testimonialCards.length === 0
		) {
			console.warn("Testimonials section elements not found");
			return;
		}

		this.boundHandleScroll = this.handleScroll.bind(this);
		window.addEventListener("scroll", this.boundHandleScroll);
		this.handleScroll();
	}

	private handleScroll(): void {
		if (
			!this.testimonialsSection ||
			!this.testimonialsBg ||
			!this.testimonialCards
		)
			return;

		const rect = this.testimonialsSection.getBoundingClientRect();
		// Start animation as soon as section enters viewport
		const triggerPoint = window.innerHeight * 0.9;
		const progress = Math.max(
			0,
			Math.min(1, (triggerPoint - rect.top) / (window.innerHeight * 1.5))
		);

		this.testimonialsBg.style.transform = `translateY(${progress * 100}px)`;

		this.testimonialCards.forEach((card, idx) => {
			const cardProgress = Math.min(
				1,
				Math.max(0, (progress - idx * 0.2) * 1.8)
			);

			(card as HTMLElement).style.opacity = cardProgress.toString();
			(card as HTMLElement).style.transform = `translateY(${
				(1 - cardProgress) * 30
			}px) rotateX(${(1 - cardProgress) * 5}deg)`;
		});
	}

	cleanup(): void {
		if (this.boundHandleScroll) {
			window.removeEventListener("scroll", this.boundHandleScroll);
		}
	}
}

class FormsScrollHandler implements ScrollHandler {
	private formsSection: HTMLElement | null = null;
	private formsGradientBg: HTMLElement | null = null;
	private formCards: NodeListOf<Element> | null = null;
	private boundHandleScroll: (() => void) | null = null;

	init(): void {
		this.formsSection = document.getElementById("forms-section");
		this.formsGradientBg = document.getElementById("forms-gradient-bg");
		this.formCards = document.querySelectorAll(".form-card");

		if (
			!this.formsSection ||
			!this.formsGradientBg ||
			this.formCards.length === 0
		) {
			console.warn("Forms section elements not found");
			return;
		}

		this.boundHandleScroll = this.handleScroll.bind(this);
		window.addEventListener("scroll", this.boundHandleScroll);
		this.handleScroll();
	}

	private handleScroll(): void {
		if (!this.formsSection || !this.formsGradientBg || !this.formCards) return;

		const rect = this.formsSection.getBoundingClientRect();
		// Start animation as soon as section enters viewport
		const triggerPoint = window.innerHeight * 0.9;
		const progress = Math.max(
			0,
			Math.min(1, (triggerPoint - rect.top) / (window.innerHeight * 1.5))
		);

		// Animate gradient background
		const bgX = 50 + progress * 20;
		const bgY = 50 - progress * 20;
		const bgX2 = 50 - progress * 20;
		const bgY2 = 50 + progress * 20;
		this.formsGradientBg.style.background = `radial-gradient(circle at ${bgX}% ${bgY}%, #87b8c6 0%, transparent 50%), radial-gradient(circle at ${bgX2}% ${bgY2}%, #2e707b 0%, transparent 50%)`;

		// Animate each form card - visible progression
		this.formCards.forEach((card, idx) => {
			const cardProgress = Math.min(
				1,
				Math.max(0, (progress - idx * 0.15) * 2)
			);

			(card as HTMLElement).style.opacity = cardProgress.toString();
			(card as HTMLElement).style.transform = `translateY(${
				(1 - cardProgress) * 50
			}px)`;
		});
	}

	cleanup(): void {
		if (this.boundHandleScroll) {
			window.removeEventListener("scroll", this.boundHandleScroll);
		}
	}
}

class AnimationManager {
	private handlers: ScrollHandler[] = [];

	init(): void {
		this.cleanup();

		// Initialize all handlers (HeroScrollHandler disabled - hero is now static)
		this.handlers = [
			new HeroStatsHandler(),
			new ServicesScrollHandler(),
			new VideoScrollHandler(),
			new CarouselHandler(),
			new ProcessScrollHandler(),
			new TestimonialsScrollHandler(),
			new FormsScrollHandler(),
		];

		this.handlers.forEach((handler) => handler.init());
	}

	cleanup(): void {
		this.handlers.forEach((handler) => {
			if (handler.cleanup) {
				handler.cleanup();
			}
		});
		this.handlers = [];
	}
}

// Global instance
const animationManager = new AnimationManager();

// Initialize on page load
if (typeof window !== "undefined") {
	document.addEventListener("DOMContentLoaded", () => {
		animationManager.init();
	});

	// Re-initialize on Astro page navigation
	document.addEventListener("astro:page-load", () => {
		animationManager.init();
	});

	// Cleanup on page unload
	document.addEventListener("astro:before-preparation", () => {
		animationManager.cleanup();
	});
}

export { AnimationManager, animationManager };
