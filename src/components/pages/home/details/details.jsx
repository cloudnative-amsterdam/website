import React from 'react';

//import Link from 'components/shared/link';

//const TITLE = 'Hotel information';

const Details = () => (
  <section
    className="safe-paddings bg-white 2xl:pb-10 2xl:pt-0 md:pb-10 md:pt-0 sm:pb-10 sm:pt-0"
    style={{ paddingBottom: '93px' }}
  >
    <div className="container-md">
      <div className="2xl:mt-16 xl:mt-16 lg:mt-16 md:mt-16">
        <h2 className="mt-3 text-center text-6xl font-bold leading-tight text-primary-1">
          Nearby Hotels
        </h2>
        <div>
          <div className="mx-auto mt-5 max-w-[800px] text-center text-lg leading-normal text-primary-1">
            <div className="mt-7 text-center">
              <p>
                <b>DOOR Open Space</b> - Tt. Vasumweg 31, 1033 SK, Amsterdam
              </p>
              <p>
                <b>Botel</b> - NDSM-Pier 3, 1033 RG Amsterdam
              </p>
              <p>
                <b>Faralda</b> - NDSM-Plein 78, 1033 WB Amsterdam
              </p>
              <p>
                <b>DoubleTree by Hilton Amsterdam - NDSM Wharf</b> - NDSM-Plein 28, 1033 WB Amsterdam
              </p>
              <p>
                <b>Aparthotel North</b> - Kaasjeskruidstraat 26, 1032 KK Amsterdam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Details;
