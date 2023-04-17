import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        
        <div>
         </div>
        <div className="left">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p></p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <div></div>

        
      </div>
    </div>
  )
}

export default FooterBanner