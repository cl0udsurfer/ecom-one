import React from 'react';
import { Link } from 'react-router-dom';

import LayoutMain from '../../components/core/LayoutMain';

import { isAuthenticated } from '../../api/auth';

const UserDashboard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();

  return (
    <LayoutMain>
      <main class='overflow-hidden'>
        <section class='page header bg-dark section'>
          <div class='container'>
            <div class='row gap-y align-items-center text-center text-md-left'>
              <div class='col-md-10'>
                <h1 class='regular text-contrast'>User Dashboard</h1>
              </div>
            </div>
          </div>
        </section>
        <section class='section'>
          <div class='container pt-0 mt-5'>
            <section class='section bg-light'>
              <div class='container bring-to-front py-0'>
                <div class='shadow bg-contrast p-5 rounded'>
                  <div class='row gap-y align-items-center text-center text-lg-left'>
                    <div class='col-12 col-md-6 py-4 px-5 b-md-r'>
                      <i
                        data-feather='star'
                        width='36'
                        height='36'
                        class='stroke-primary'
                      ></i>

                      <h4 class='mr-3'>User Information</h4>

                      <p class='mt-4'>
                        Name: {name}
                        <br />
                        Email: {email}
                        <br />
                        {role === 1 ? 'Administrator' : 'Registered User'}
                      </p>
                    </div>
                    <div class='col-12 col-md-6 py-4 px-5'>
                      <i
                        data-feather='code'
                        width='36'
                        height='36'
                        class='stroke-info'
                      ></i>

                      <h4 class='mr-3'>Purchase History</h4>

                      <p class='mt-4'></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </LayoutMain>
  );
};

export default UserDashboard;
