# React Landing Preview 📱💻

A beautiful, responsive preview modal for Next.js/React applications. Perfect for page builders, CMS, or email template editors.

![Demo Screenshot](link-to-screenshot.png)

## Features

- 🖥️ **Dual View:** Instant toggle between Desktop and Mobile (iPhone notch style) views.
- 🔒 **Sandboxed:** Uses `iframe` with `srcDoc` for style isolation.
- 🛡️ **Safe Interactions:** Automatically intercepts link clicks to prevent navigation away from the preview.
- 🎨 **Smart Styling:** Injects custom scrollbars and utility classes if needed.
- 🧩 **Stack:** Built with Radix UI (Dialog), Lucide React, and Tailwind CSS.

## Installation

This is a copy-paste component (shadcn/ui style).

1. Ensure you have the necessary dependencies:
\`\`\`bash
npm install lucide-react sonner clsx tailwind-merge
npx shadcn-ui@latest add dialog button
\`\`\`

2. Copy `src/components/landing-preview.tsx` to your project.

## Usage

\`\`\`tsx
import { useState } from "react";
import { LandingPreview } from "@/components/landing-preview";

export const MyBuilder = () => {
  const [showPreview, setShowPreview] = useState(false);
  const myHtml = "<h1>Hello World</h1>";

  return (
    <>
      <button onClick={() => setShowPreview(true)}>Preview</button>
      
      <LandingPreview 
        open={showPreview} 
        onClose={() => setShowPreview(false)} 
        htmlContent={myHtml} 
      />
    </>
  );
};
\`\`\`

Credits & Attribution

The example templates used in this demonstration (Pop Art, SaaS, Cyberpunk) were generated using Optihint.

This repository serves as a showcase for the preview component logic, while the HTML content is used to demonstrate the rendering capabilities of generated pages.