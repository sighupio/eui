/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
// import { animation } from 'src/global_styling/variables/_animations';
import { FuryConnectionProps } from './types';
export const FuryConnection: FunctionComponent<FuryConnectionProps> = ({
  isConnected = false,
  ...rest
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const pathRef2 = useRef<SVGPathElement>(null);
  const linesRef = useRef<SVGGElement>(null);

  const [loop, setLoop] = useState<any>();
  const [controlPoint, setControlPoint] = useState<number>(20);

  useEffect(() => {
    if (isConnected === true) {
      setLoop(
        setInterval(() => {
          // Set css var and animation to animate the connection dots
          pathRef.current?.style.setProperty(
            '--connection-path-lenght',
            (pathRef.current?.getTotalLength() * 1.8).toString()
          );
          pathRef.current?.style.setProperty(
            'animation',
            'connection 4s infinite linear'
          );

          pathRef2.current?.style.setProperty(
            '--connection-path-lenght',
            (pathRef2.current?.getTotalLength() * 1.8).toString()
          );
          pathRef2.current?.style.setProperty(
            'animation',
            'connection 4.5s infinite ease-in-out'
          );

          linesRef.current?.style.setProperty('opacity', '0');

          // Set distance to move the bezier curves control point
          setControlPoint(randomNumberWithinARange(2, 26));
        }, 500)
      );
      // Hide the disconnected lines with the proper animations
      linesRef.current?.style.setProperty(
        'animation',
        'close 0.5s ease-in-out, hide 0.5s 0.5s ease-in'
      );
    }
  }, [isConnected]);

  useEffect(() => {
    if (isConnected === false) {
      // Reset loop and animations
      clearInterval(loop);
      setControlPoint(20);

      pathRef.current?.style.setProperty('--connection-path-lenght', '0');
      pathRef.current?.style.setProperty('animation', 'none');

      pathRef2.current?.style.setProperty('--connection-path-lenght', '0');
      pathRef2.current?.style.setProperty('animation', 'none');

      linesRef.current?.style.setProperty('animation', 'show 1s ease-in');
    }

    // Set the disconnected lines visible at page load
    linesRef.current?.style.setProperty('opacity', '1');

    return () => {
      // Unmount
      clearInterval(loop);
    };
  }, [loop, isConnected]);

  return (
    <>
      <div {...rest} className="connection">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 5 190 50">
          <path d={`M 0 20 Q 52.5 ${controlPoint}, 95 20 T 180 20`} />
          <path
            ref={pathRef}
            className="central-path"
            d={`M 0 26 Q 52.5 ${controlPoint + 6}, 95 26 T 180 26`}
          />
          <path
            ref={pathRef2}
            className="central-path"
            d={`M 0 32 Q 52.5 ${controlPoint + 12}, 95 32 T 180 32`}
          />
          <path d={`M 0 38 Q 52.5 ${controlPoint + 18}, 95 38 T 180 38`} />
          <g ref={linesRef} className="lines">
            <line x1="50%" y1="14" x2="45%" y2="44" className="bigLine" />
            <line x1="47%" y1="14" x2="42%" y2="44" className="line" />
            <line x1="53%" y1="14" x2="48%" y2="44" className="line" />
          </g>
        </svg>
      </div>
    </>
  );
};

const randomNumberWithinARange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};
