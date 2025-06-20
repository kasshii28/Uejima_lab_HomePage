import ForceGraph3D from "react-force-graph-3d";
import { useRef, useEffect } from "react";
// @ts-ignore
import { UnrealBloomPass } from "https://esm.sh/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import type { ForceGraphMethods } from "react-force-graph-3d";

export const CreateBloomGraph = () => {
  fetch("@data/graph.json")
    .then((res) => res.json())
    .then((data) => {
      const FocusGraph = () => {
        const graphRef = useRef<ForceGraphMethods<any, any> | undefined>(
          undefined
        );

        useEffect(() => {
          const bloomPass = new UnrealBloomPass();
          bloomPass.threshold = 0;
          bloomPass.strength = 4;
          bloomPass.radius = 1;
          graphRef.current?.postProcessingComposer().addPass(bloomPass);
        }, []);

        return (
        <ForceGraph3D 
          ref={graphRef}
          backgroundColor="#000003"
          graphData={data}
          nodeLabel="id"
          nodeAutoColorBy="group"
        />);
      };
    });
};
