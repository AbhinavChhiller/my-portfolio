import React, { Suspense, lazy, useMemo } from "react";

const BallCanvas = lazy(() => import("./canvas/Ball"));
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const techItems = useMemo(
    () =>
      technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Suspense fallback={null}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </div>
      )),
    [technologies]
  );

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {techItems}
    </div>
  );
};

export default SectionWrapper(Tech, "");
