<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <div>
    <footer class="footer footer-center text-black-content p-10">
      <aside>
        <p class="font-bold">
          lidet
          <br />
        </p>
        <p>Copyright © {{ currentYear }} - All right reserved</p>
      </aside>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <NuxtLink to="https://github.com/LidoHon" target="_blank">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 70 70"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg"
              class="transform hover:scale-150 hover:rotate-4 transition duration-300 ease-in-out"
            >
              <metadata>
                <rdf:RDF>
                  <cc:Work>
                    <dc:subject> Code </dc:subject>
                    <dc:identifier> github-code-source </dc:identifier>
                    <dc:title> GitHub (Code Source) </dc:title>
                    <dc:format> image/svg+xml </dc:format>
                    <dc:publisher> Amido Limited </dc:publisher>
                    <dc:creator> Richard Slater </dc:creator>
                    <dc:type
                      rdf:resource="http://purl.org/dc/dcmitype/StillImage"
                    />
                  </cc:Work>
                </rdf:RDF>
              </metadata>
              <path
                d="m -7.9794841,547.19629 c -10.9321299,-1.4285 -20.3690499,-7.7016 -26.0162699,-17.2939 -1.87961,-3.1927 -3.38391,-7.3029 -4.09943,-11.2009 -0.975171,-5.3125 -0.654,-11.178 0.8926,-16.3015 1.2739,-4.2201 3.29627,-8.1193 6.07611,-11.7149 1.16057,-1.5011 4.28357,-4.626 5.78381,-5.7872 5.51609,-4.2697 11.80491,-6.7762 18.5887399,-7.4087 2.14791,-0.2003 6.12932998,-0.094 8.17663,0.218 10.8468601,1.6536 20.1690401,8.1128 25.5689201,17.7162 5.1137,9.0944 5.77487,20.648 1.73715,30.3555 -4.89144,11.7599 -15.5607,19.8508 -28.26166012,21.4318 -1.94022998,0.2415 -6.54817998,0.2337 -8.44659998,-0.014 z m -4.6273999,-12.3355 c 0.40825,-1.1212 1.01503,-2.016 1.96165,-2.8929 l 0.8105899,-0.751 -0.6508899,-0.091 c -3.57335,-0.4987 -7.44137,-1.768 -9.88241,-3.2429 -4.12392,-2.4918 -6.21048,-7.1356 -6.20986,-13.8207 2.8e-4,-2.9091 0.32023,-4.5331 1.26403,-6.4159 0.64702,-1.2907 0.889,-1.6586 1.77393,-2.697 l 0.65984,-0.7743 -0.35393,-1.3545 c -0.60984,-2.3338 -0.50881,-4.5378 0.32489,-7.0884 l 0.34792,-1.0644 0.9083,0 c 2.00247,0 4.50912,0.9411 7.46028,2.7948 l 1.45497,0.9139 1.62413,-0.3968 c 2.6343499,-0.6435 3.9132799,-0.7723 7.5948499,-0.7651 3.60657998,0.01 4.94317,0.1512 7.57782,0.8177 l 1.37004,0.3465 1.32524,-0.8362 c 2.97792,-1.879 5.6007501,-2.8727 7.5880701,-2.8748 l 0.90975,0 0.28631,0.7897 c 0.99828,2.7535 1.08765,5.6558 0.24882,8.0801 l -0.1823,0.5269 0.87914,1.1043 c 0.99959,1.2555 2.10605,3.4201 2.42543,4.7449 0.94486,3.9193 0.33645,9.6525 -1.39175,13.1148 -1.26479,2.5339 -3.03354,4.2403 -5.87856,5.6713 -1.7323801,0.8713 -5.4513101,1.9669 -8.0511701,2.3718 l -1.06002,0.1651 0.56242,0.4454 c 0.70068,0.5547 1.41249,1.4426 1.85641,2.3156 0.58968,1.1596 0.72568,2.2109 0.72828,5.6293 0.002,2.9329 0.0182,3.1331 0.24258,3.0466 0.13211,-0.051 0.7961,-0.287 1.47553,-0.5245 1.63865,-0.573 4.7476601,-2.158 6.4511401,-3.2889 6.27917,-4.1685 10.90321,-10.4468 12.96008,-17.5964 0.88011,-3.0593 1.24615,-5.6472 1.24615,-8.8105 0,-8.8503 -3.39536,-16.8047 -9.81009,-22.9824 -4.74026,-4.5652 -10.7245401,-7.476 -17.43568012,-8.4809 -2.23640998,-0.3349 -6.65652998,-0.3404 -8.85315998,-0.011 -7.0498499,1.0571 -13.0197599,4.0504 -17.9833199,9.0169 -4.92656,4.9295 -7.9245,10.8739 -9.00812,17.8616 -0.33926,2.1877 -0.33926,6.8669 0,9.0546 0.62353,4.0208 2.06834,8.1845 3.95013,11.3835 3.81132,6.4792 9.81888,11.5186 16.56416,13.8949 l 1.46722,0.5169 0.0793,-3.5218 c 0.0705,-3.1291 0.11194,-3.6112 0.37182,-4.3249 z"
                fill="#00bcf2"
                transform="translate(38.649 -477.387)"
              />
            </svg>
          </NuxtLink>
          <NuxtLink to="https://lidethonelign.com/" target="_blank">
            <svg
              width="40px"
              height="30px"
              viewBox="0 0 1024 1024"
              class="icon transform hover:scale-150 hover:rotate-180 transition duration-300 ease-in-out"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z"
                fill="#4A5699"
              />
              <path
                d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z"
                fill="#C45FA0"
              />
              <path
                d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z"
                fill="#E5594F"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/lidet-honelign-00a8ba242/"
            target="_blank"
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              class="transform hover:scale-150 hover:rotate-2 transition duration-300 ease-in-out"
            >
              <path
                fill="#0A66C2"
                d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
              />
            </svg>
          </NuxtLink>
        </div>
      </nav>
    </footer>
  </div>
</template>
