import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
// import { animation } from 'src/global_styling/variables/_animations';
import { ConnectionProps } from './types';

export const Connection: FunctionComponent<ConnectionProps> = ({
  // children,
  // className,
  // color = 'primary',
  isConnected = false,
  ...rest
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);

  const [animation, setAnimation] = useState<boolean>();
  const [loop, setLoop] = useState<any>();
  const [controlPoint, setControlPoint] = useState<number>(80);

  useEffect(() => {
    // TODO: trigger the animation via props and remove testing button
    if (animation) {
      setLoop(setInterval(() => {
        // Set css lenght and animation to animate the dots
        pathRef.current?.style.setProperty('--connection-path-lenght', pathRef.current?.getTotalLength().toString());
        pathRef.current?.style.setProperty('animation', 'connection 0.65s infinite linear');
        pathRef2.current?.style.setProperty('--connection-path-lenght', pathRef2.current?.getTotalLength().toString());
        pathRef2.current?.style.setProperty('animation', 'connection 0.85s infinite linear reverse');
        // Set distance to move the bezier curves path
        setControlPoint(randomNumberWithinARange(60, 80));
        console.log('Loop', animation);
      }, 500)
      );
    } else {
      // Reset loop and animation
      clearInterval(loop);
      setControlPoint(80)
      pathRef.current?.style.setProperty('--connection-path-lenght', '0');
      pathRef.current?.style.setProperty('animation', 'none');
      pathRef2.current?.style.setProperty('--connection-path-lenght', '0');
      pathRef2.current?.style.setProperty('animation', 'none');
    }
    console.log(animation, loop)
  }, [animation])



  return (
    <>
      <div {...rest} className="connection">
        {isConnected ? 'connected' : 'not connected'}
        {/* TODO: give container proportion to be scaled within the parent width */}
        <svg xmlns="http://www.w3.org/2000/svg">
          <path ref={pathRef} d={`M 10 80 Q 52.5 ${controlPoint}, 95 80 T 180 80`} />
          <path ref={pathRef2} d={`M 10 90 Q 52.5 ${controlPoint + 10}, 95 90 T 180 90`} />
        </svg>
      </div>

      <button onClick={() => animation ? setAnimation(false) : setAnimation(true)}>CLICKKK</button>
    </>
  )
}

const randomNumberWithinARange = (min: number, max: number) => { 
  return Math.floor(Math.random() * (max - min) + min);
}