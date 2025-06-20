// @ts-ignore
import { UnrealBloomPass } from "https://esm.sh/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import data from "@data/bloomGraph.json";
import type { LinkObject, NodeObject } from "@data/dataTypes";
import { useEffect, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import type { ForceGraphMethods } from "react-force-graph-3d";

export const CreateBloomGraph = () => {
  const graphRef = useRef<
    ForceGraphMethods<NodeObject, LinkObject> | undefined
  >(undefined);

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
      enableNodeDrag={false}
      showNavInfo={false}
    />
  );
};
