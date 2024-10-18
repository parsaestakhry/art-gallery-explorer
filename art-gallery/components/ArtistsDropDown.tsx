export const ArtistsDropDown = () => {
  return (
    <>
      <div className="sm:flex hidden" >
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 btn-ghost ">
            Artists
          </div>

          <ul className="sm:dropdown-content  sm:menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max ">
            <li>
              <a>Solutions</a>
              <ul>
                <li>
                  <a>Design</a>
                </li>
                <li>
                  <a>Development</a>
                </li>
                <li>
                  <a>Hosting</a>
                </li>
                <li>
                  <a>Domain register</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Enterprise</a>
              <ul>
                <li>
                  <a>CRM software</a>
                </li>
                <li>
                  <a>Marketing management</a>
                </li>
                <li>
                  <a>Security</a>
                </li>
                <li>
                  <a>Consulting</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Products</a>
              <ul>
                <li>
                  <a>UI Kit</a>
                </li>
                <li>
                  <a>Wordpress themes</a>
                </li>
                <li>
                  <a>Wordpress plugins</a>
                </li>
                <li>
                  <a>Open source</a>
                  <ul>
                    <li>
                      <a>Auth management system</a>
                    </li>
                    <li>
                      <a>VScode theme</a>
                    </li>
                    <li>
                      <a>Color picker app</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a>Company</a>
              <ul>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
                <li>
                  <a>Privacy policy</a>
                </li>
                <li>
                  <a>Press kit</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
