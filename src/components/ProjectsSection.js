import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Image } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    imageSrc: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    imageSrc: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Photo Gallery",
    description:
      "A one-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    imageSrc: "https://images.unsplash.com/photo-1647089490916-b127d4048332?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    imageSrc: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#18A999"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;