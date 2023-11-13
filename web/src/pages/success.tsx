import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useAnimationContext } from '../context/AnimationContext';
import { useStateContext } from '../context/StateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  const { animationPageStatus, pageTransitionCompleted } = useAnimationContext();

  useEffect(() => {
    // localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    sessionStorage.clear()
    animationPageStatus(false)
  }, []);

  return (<>
    {pageTransitionCompleted &&
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="success-wrapper">
              <div className="success">
                <h2>Thank you for your order!</h2>
                <p className="email-msg">Check your email inbox for the receipt.</p>
                <p className="description">
                  If you have any questions, please email{' '}
                  <a className="email" href="mailto:order@example.com">
                    customer@peenkok.com
                  </a>
                </p>
                <Link href="/">
                  <button type="button" className="btn btn-primary text-black">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </>
  )
}

export default Success