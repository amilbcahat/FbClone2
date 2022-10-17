const studyspaceicon = () => {
    return(
    //  this is jsx code.

    <svg
    width={20}
    height={23}
    viewBox="0 0 20 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <mask
      id="mask0_534_171"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={20}
      height={23}
    >
      <rect y="0.440369" width={20} height="22.0183" fill="url(#pattern0)" />
    </mask>
    <g mask="url(#mask0_534_171)">
      <rect x={-4} y="-2.8624" width={32} height="33.0275" fill="#4E4E4E" />
    </g>
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_534_171"
          transform="translate(-0.0504587) scale(0.00215023 0.00195312)"
        />
      </pattern>
      <image
        id="image0_534_171"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13vF5Vmejx3zmpQBJa6C20UEUEFBEcmmAfy8DMqGP36sy9M3rHOtaLU2xz9dqnoI51VHTsIiJNBUaUHhBCDS20UBMgCSS5f6wTc5Kc8r7nvO961tr79/18ns8hJGQ97L3ftZ937bXXAkmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSxjcQnYCkvpoBbA3MHfo5BZgNTN3gzz0BLAUeB+4D7h/6uSJbppKysgCQ6jYI7Ak8eejnvGGxMzBrkn//MuBWYNFQ3AJcCywY+vWaSf79koJYAEh12Rc4YigOBg4ANg3KZSlwNXAJ8BvgQuCmoFwkdckCQCrbnsBzgROAZ5CG8kt2N/Ar4Ezg58BtselIklSHQeAY4FPAdaQh9prjauBjwOH4hUOSpPUMAEcBnwYWE3/T7lfcAnwCeFpvDpskSXXaHngXcD3xN+fccc3Q//u2kz6KkiRV4hjgv4CVxN+Io2MF8E3SIwJJkhpnGvAy4GLib7qlxgXAyaS1CiRJqto04E2k59/RN9ha4jrglVgISJIqNBV4Dem9+Ogbaq2xEPgL0psRkiQV73mkSW7RN9CmxGXAcV2dAUmSMtoXOJ34G2ZT4wfA/I7PhiRJfbYJ8FGc1Z8jVgAfJG1yJElSmGeSNseJvjG2La4Hju/g/EiS1FOzgVOB1cTfDNsaq4HPE7cZkiSpZZ5GM9bpb0rcSNooSZKkvpgCfAB4nPibnrF+rATeg68MSpJ6bGvSFrfRNzpj7Dgd2GqUcyhJUleeAtxM/M3N6CxuxR0HJUmT9GrgMeJvakZ38Rjw8hHOpyRJYxoATsFZ/jXH6qFzOIAkSR2YDnyN+BuY0Zv4FjATSZLGMAs4m/ibltHbOBPYDEmSRrA5aU/66JuV0Z+4CN8QkCRtYEvSDSL6JmX0Ny4BtkGSJNK3wiuIvzkZeeJyHAmQpNabA/yW+JuSkTcuIu3nIElqoU2B84i/GRkxcQFODJSk1plKWjY2+iZkxMaPSXs8SK3jha+2+jSuFCeYD2wP/CQ6EUlS/72T+G+eRlnxv5EkNdqLgVXE33CMsmIV8AKkFnGNbLXJfNKM/82jE1GRlpJ2Ebw2OhEph8HoBKRMZgHfw5u/RjcbOI30dojUeBYAaosvAgdEJ6HiPQn41+gkJEm98XrinzEbdcUrkRrOOQBquj2By3DVN3VnGfAU4IboRKR+8RGAmmwq8HW8+at7s4Av41opajAvbjXZu4FXRSehau0KPEJaMlhqHB8BqKnmk3b4mxmdiKr2GGli4I3RiUi95iMANdEA8C9489fkbQKcil+W1EAWAGqiNwDHRSehxjgWeEV0ElKvWdWqabYArgfmRieiRrkH2Bt4ODoRqVecBKim+TB++1fvbUZaH+Cc6ESkXnEEQE2yF3A1MD06ETXScmA/YFFwHlJPOAdATfIxvPmrf2YCH4pOQuoVRwDUFIcAF+M1rf5aAxwMXBmdiDRZzgFQU3yB9O6/1E8DwDbAd6ITkSbLb0tqgiOAC6OTUGusJu0T4CiAquYcADXBu6MTUKsMAu+PTkKaLEcAVLv5wDVYzCqvVcA+uESwKmanqdq9Da9j5TcF+OvoJKTJcARANdsGuIW0XruU28OkHQMfik5Emgi/Oalmr8abv+LMAV4TnYQ0UY4AqGa/J63MJkW5irRdsFQdRwBUq2Pw5q94BwJPjU5CmggLANXqDdEJSENeH52ANBE+AlCNNiVtz7pZdCISaRLgdsCK6ESkbjgCoBq9AG/+KsfmwAnRSUjdsgBQjf40OgFpAydHJyB1y0cAqs0s4G7SYwCpFA+SHgOsjE5E6pQjAKrNcXjzV3m2IF2bUjUsAFSb50UnII3ixOgEpG5MjU6gItuThp83B2aTJqHNGvq9ZcAjwFLSUOAjwF0BObbBc6ITkEbx7OgEGsz+tw+cA7CxfUh7fe8D7EvabW4+6y62Ti0DrhuKa4GFwKVDv9bE7Eda/U8q1a7AbdFJVMz+V1ntQJrB+2/AImBNn+Mu4DTgjcDu/f/fa5S/ov/nxzAmE69F3bD/VXa7Ae8j7SMf3WFcA7x3KCeN7RvEny/DGCu+gMazG/a/ymwO8DrgPGAV8RfehrEKOJf0DWJOfw5B9RYRf54MY6zwEdXI7H8VYi5wCvAA8RdZp7EU+BRpeEzJjsSfF8MYL1YDW6G17H8VYjvgI6QZodEX1ERjOenZ2M49PjY1ehHx58MwOonnIvtfhdgc+CRpY47oC6iXF+InaPfQ1AeIPw+G0Un8He1l/6swLwRuJf6C6VcsBl5FO1/f/A7xx98wOomv0072vwqxN/Bz4i+QXHEesH8vDlxFFhJ/3A2jk7iCdrH/VZhXAY8Sf1HkjuXAW3pw/GowA3iC+GNuGJ3ECmAa7WD/qxBzgG8RfyFEx/eBLSd5LEs3n/jjbBjdRNMXmbH/TdGG/rc4hwI3EH/yS4lFwNMnc0ALdyLxx9gwuoljaS773/VjEZX2vzXuBvgXwIXAntGJFGQ30nOplwfn0S/zohOQujQvOoE+sf/dWLX9b20FwN8AXwGmRydSoBmk2cdvj06kD3aLTkDq0rzoBPrA/nd0Vfa/tRQAA6TVpD5NPTlHGAD+mbSKVZNeVdk+OgGpS01aRc7+tzPV9b9ToxPowCBwKmkdaXXmzaT9st9IWpq0dnOjE5C6tHV0Aj1i/9u9avrfGqq5T+DFNxGvBz4XnUSPNKUzVXs05Zq1/52YJvW/YU4hfoZn7fGBbg96ga4l/jgaRjexgPqdQvxxrD2a0P+GeBPxJ68p8eYuj31p7iD+GBpGN3EbdbP/7V3U3v9m91Jc+a2X8QTw4q7OQFmWEH8MDaObuId62f/2Nortf0ucqbgXcAnuvNRry4DDSGvq1+ZhYHZ0ElIXHibtjFcb+9/+KLL/LW0S4Azg23jx9cMs4DRgk+hEJmBGdAJSl2p8V97+t3+K7H9LKwA+ARwSnUSDHQR8LDqJCajhdVVpuBoLAPvf/iqu/y3pEcBJpD3f1X8nAf8VnUQXVtKe3dXUDCupa+TK/jefYvrfUgqArUivem0TnUhL3AfsS5pcV4NlpIU1pFospZ6hdPvfvIrpf0t5BPBhvPhy2hr4h+gkurAyOgGpSzVds/a/eRXT/5YwAnAYcBHlFCNtsRo4EvhNdCIduBP3A1BdFgM7RSfRAfvfGEX0v9EnfZC0XGJ0Hm00CHwWmBKdSAeWRScgdamGa9b+N04R/W/0iX8D8LTgHNrsUOC10Ul04L7oBKQuhT/f7YD9b6zw/jeyAJgGvDuwfSXvofzX7CwAVJvSr1n73zKE9r+RBcArgHmB7SvZHXhZdBLjqOHblDRc6des/W8ZQvvfqAJgEHhHUNva2HuIfxw0lnujE5C6VHIBYP9blrD+N6rTPwnYP6htbWxf0gYgpap9ZzW1zy3RCYzB/rcsYf1vVAHwt0HtanRvjU5gDDdHJyB1aVF0AmOw/y1PSP8bUQDsDRwe0K7GdgSwT3QSo1gUnYDUpVKLVvvfMoX0vxEFwKspYwEibezl0QmMotTOVBrJGsp9BGD/W67s/W/uC2EAuJE081HluYV0btZEJzKC24Cdo5OQOnALZc6wt/8tW/b+N/cIwNF48ZVsN+Co6CRGsSA6AalDV0YnMAr737Jl739zFwB/mrk9de/PohMYRamdqrShUotV+9/yZe1/cxcAx2duT907LjqBUZTaqUobKvVatf8tX9b+N2cBsCMwP2N7mpj9SOeqNJdGJyB16LLoBEZg/1uHrP1vzgLA6rMex0QnMIJrKXt1NQnSNXpddBIjsP+txzG5GspZABybsS1NTonnag3Be2dLHfg1Zb5FU+JnWiPLdq5yFgBHZ2xLk3NMdAKjuCA6AWkcpV6j9r/1OCZXQ7kKgE0o871YjWwPYGZ0EiP4VXQC0jh+HZ3ACOx/65Kt/81VAMzP2JYmbxDYKzqJEVwE3B+dhDSKJcAl0UmMwP63Ltn631wXRalrzGt0JZ6zVcBZ0UlIoziTdI2WpsTPssaW5ZxZAGg0pZ6zM6ITkEZR6rVZ6mdZo7MAUKhSz9nPgNXRSUgbWAX8PDqJUZT6WdboGlUAlLiwjMa2U3QCo7iLMidaqd3OA+6JTmIU9r/1ydL/5ioAZmdqR71T8jk7LToBaQMlX5Mlf5Y1siznzAJAoyn5nH0HeCI6CWnIE8APopMYQ8mfZY3MAkChSj5n95KGXKUSnEW5w/9Q9mdZI2tUATArUzvqndI7jS9FJyANKf1atP+tT5b+dyBHI6QhsimZ2lJvPAFMi05iDNOB24FtohNRqy0BdgZWRCcyBvvf+mTpf3ONAJT84dDIlkcnMI6VwNejk1DrfZny+7fS89PGsvS/uQqApZnaUe/UcM7+nTJ3XlM7rAG+EJ1EB2r4LGt9Wc6ZBYBGU8M5u5a0MJAU4SfAwugkOlDDZ1nrswBQqFrO2cejE1Br1XLt1fJZ1jqNKgCWZWpHvVNLp3EOcGl0Emqdi4FfRifRIfvf+jSqALg3UzvqnSXRCXThn6MTUOt8NDqBLtj/1idL/5urALguUzvqnRqeba51GnBldBJqjQXA96KT6IL9b32y9L+5CoCabiZKajpnq4G/j05CrfE+6tqRsqbPshILAIWq7Zx9D/hddBJqvEuAH0cn0aXaPsuyAFCw2oYN15C+mUn99E7qW3vC/rc+WfrfXAXA/ZS9WYbWdxfwYHQSE3Am9X07Uz2+R3rrpDb2v3XJ1v/mKgAALszYlibngugEJuFvcelT9d5K4O+ik5gE+996ZOt/cxYA52ZsS5NT87m6EfhMdBJqnE8A10cnMQk1f6bbJtu5yrUbIMCBpNdnVL79gWuik5iETUnX2h7RiagRFpH6r0eC85gM+996ZOt/cxYAA8BiYPuMbap7dwI7Ud9Epw09B/cJUG+cCPwiOolJsv+tQ9b+N+cjgDXAeRnb08ScQ/03f4AzgG9EJ6HqfZn6b/5g/1uLrP1vzgIA4IeZ21P3mnSO/jepopYm4g7gbdFJ9FCTPttNlfUc5XwEADCT1CFvkblddeYhYAfgsehEeuhE0mhA7mtddVtNunbOjk6kh+x/y5a9/809ArAc+G7mNtW5b9Osmz+ktQE+HZ2EqvNxmnXzB/vf0jWx/93IH5GecRjlxVFjnLeazQQuJ/74GnXEJcB0msn+t9zI3v9GDIsOADfgK1qlWUQ6J2uC8+iXeaQ93LcOzkNlewA4DLgpOpE+sf8t0yIC+t/cjwAg/Q/+S0C7Gttnae7NH9IH7DXUtYub8loNvILm3vzB/rdUTe9/17MZcC/xQy5GiiXArDHPWHN8kPjjbZQZ76cd7H/LirD+d0pEo8DjwCbAsUHta30fBs6KTiKTXwJ7A0+KTkRF+Q7wFlKH3HT2v2UJ638jX43aHLhl6KfiPEx6Pv5AcB45zSTN8H5GdCIqwvnACaRZ8m1h/1uG0P43Yg7AWg/hs6gSfJZ23fwhdfR/TN2bu6g3bgReSrtu/mD/W4rQ/jd6cZQ5pE0PdgzOo63uAvYj097TBdoL+BVp8Q21z2LgmTR70t9Y7H9jhfe/kSMAkIY/3hWcQ5u9lfbe/CG9DnUscHd0IspuCWnYv603f7D/jdb2/vcPziZ+Jmbb4pfEjwCV4snA/cSfEyNPPAgcitay/80f9r/DzCc9g4s+KW2JFaShJ61zOBYBbYj7gKeh4ex/80Yx/W/0I4C1rgM+Gp1Ei3yY9OxP61xEeh7s7oHNdQ9wHPDb6EQKY/+bl/3vCAZxKCpHnEfc+g812Ae4jfjzZPQ2FgMHoNHY/+aJ87D/HdX2pG9g0SepqXEPzvjtxE7AZcSfL6M3sQDYFY3H/re/Yf/bgecAq4g/WU2LVcCzuzgPbTcbOJ3482ZMLn6Bi910w/63P2H/24V/IP6ENS0+2NUZEMA04IvEnztjYnHq0DlUd+x/ex/2v10YwI63l/E1fOVkMt5ImrkbfR6NzuJxfL99Mux/exv2vxMwBfg+8Sev9vgJMLXLY6+NHUZaOz36fBpjx+3AEaOcQ3XO/rc3Yf87CZsAvyb+JNYaF5G2/lRvbA+cSfx5NUaOM4BtRz176pb97+TC/rcHtgYuJ/5k1haXA1tN4HhrbAOkbWNdOKWcWE4a8i9lXZMmsf+dWNj/9tAs/ObVTZyHM5/77cnAVcSf67bHAuCgcc6VJsf+t7s4D/vfnpsBnEb8yS09fkAaulP/TSN983Q0IH+sBD5C6hfUf/a/nYX9bx9NAf6V+JNcanwJJ5xE2Bs4l/jz35a4ANi/ozOjXrL/HTvsfzN5C76WNTyWA38zqSOqyRoAXoUrqfUzFpNeyfRZfyz73/XD/jfAoaT93KNPfnQsAp4+uUOpHtoMOAV4jPhroymxAvgUMKfz06A+s/9NsQj73zBzgG8RfxFExfeBLSd9FNUPuwP/QVqUJvo6qTUeJy1IM6+7Q69M7H/tf4vwOuBe4i+IXHEv8NqeHDn12+7AvwFPEH/d1BKrSBPO5k/geCs/+1+F25I0TNjkjnY18FVgmx4dM+WzD6kQ8NHA6PEoaZKZN/762P+qCIeSVmCKvlh6HZfhEqdNsC1pY5C7ib+mSom7SfMm7FjrZ/+rcIPAC4HfEX/hTDauJM0un9LTI6RoU4BnkYa6m/ytabRYRdqq92Rg+iSPpcpi/6tiPAu4kPgLqdu4lNQ5uotU880D3kda1S76uut3XAG8F9i1FwdOxbP/VRGOIT2/WUb8xTVaLBvK8Zi+HAHVYH/SI4IriL8eexWXA/8H2K+Hx0l1OQb7XxVgE1Jl92PKeEVrFXA+aYGT2X38/1Z9dgLeAHwXeID4a7XTuB/4DvB6YMeeHxXVzP63IG0f3tgROAE4DjgW2CVTu7eRlo49GziLtMKZNJZB4ADgyKE4AtiD+M/wGuAm0jDvhaTO9PekGdPSWOx/g0V3HqXZm3QhHkJ6bWsfYIdJ/p13AtcC15GeK50LXD/Jv1OC9I3lQNJueAcBe5LmE8yj95vkLAduAW4GbiRNjlpA2hFxaY/bUjvZ/2ZmATC+OaQLcR7pXdc5pO0xZ7FuyGgp6fnRMuBh0nDtzaSL7uG86UoMkDrOnUn7uW8NzB36OY00DDtzg/9mOWmNgpXAfRvE7azb40DKyf5XkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkqRgA9EJSOqLAWCLYb+eA0wZ5c+uBh4a+ucngKV9zEtSIdpaAGwOzB2K2azrHAeHfq8bM4FNRvj3K4BHgZXAIyP8fARYMhTSaOYCOwLbANux7rpd++utgc1I1/EM0rW8GTC9B22vvYYfAJax7rp9YOjnMuB+4L5hP9f+8xLgwR7koGZbez1vRupHZwKbkq7ltT9Hu57X9qXdWAY8PvTPa6/rtf1w667XJhcAs4EDgYOGfu4BzAN2Z+QbdpRVpIvvLmARcPNQXA9cDdwalplymA7sC+xJuj7nka7RtT9nBeXVC8NHFh4a+vUy4F7S9b725+2k6/16Uqes5tgNOADYm/Wv621JN/6pYZlt7DFSH7wIuAlYAFwJXEVDR8WaVADsBhwDHAk8A9iP9I2+dg+SLsLLgF8PxT2hGWmi5pGK0SeRCtMnAfOBaYE5lWYJcB3pmr8Y+B3we9KjCZVtO+CPgKOAp5Cu7y3G/C/qsBq4BrgQuAA4D7glMqFeqbkAmAIcDTwfeC7pht8W1wLnAD8kXYwrQ7PRSGYBh5MK0iOGotvHS0oeBS4HfkW67i8Y+neKNQM4FnjR0M99YtPJ6hrgZ8BPgV+SRnLVZwPAM4HPk4YO1xg8CHwTeAl+k4w0F/hz4DPApaRvrNHXRlNjOanwfR/w5A7OjXpnOnAS8C3SY53oa6GEuAv4HOneVPOX6mJtC7yd9M03+mSXHHcBH6NdlXikA4B3Ab8gTSyKPv9tjUXAp4BnYRHcL/sB/5f0+DH6fJcc15LuVdtO7DBruAOAL5Iq/ugTW1ucBRzf/SHXGDYhffv5EnAn8efY2DjuAv4f6Rm0Ju8E0mOX6PNaWywHvkC6h6lLTwNOJ02+iD6RtcdFwItpxoTICFOA5wBfAR4m/nwanccC4B3ADhudVY1lEHgpaQJm9DmsPVYDPwGe2tUZaKmDgR8Tf9KaGBeTZuiqMwcAH8Fv+k2IlcBppEcEGtsxpDks0eesabGaNGn7oI7PRIvMJT3Dc+JU/+PHpHfOtbHNgbcAC4k/T0Z/4hLgdaQFZ7TOrsBXiT8/TY9VQ8d5+85OS7NNJQ3RObSaN5YDH6Q3q8U1wd6kb/sPEH9ujDxxN3AKzXhPfTKmA39PWvUx+py0KR4C3sroy3M33kHAb4k/EW2OBcBh452ohhoE/pg0g9+5Ju2N+0iFwFa0z0E43B8dl9GyPngqqeL0takyYiXwD7RnNGAQeDlpIY/oY2+UEw+TRsVm03wzgH/CPriUeJxUhJa0LHJf7A6cT/wBNzaOi4fOT1MNAi8krSgXfayNcmMJaW2Hps4R2AX4b+KPs7FxXER6HNlIJ5M2VIg+yMbosYS0rHKTDJJW6Ps98cfXqCduBl5Bs1Z2ex7pkUf0sTVGj4dIr2A2xlTSBCufs9YRq4fOVxMmp5xI2skr+pga9cb51L+o0ABpVGMV8cfTGD9Wk96Kq35Vy82BM4k/oEZ3cTp1zwnYBV9pMnoXa1/d2oY6TSd9pqOPo9FdnAHMGeF8VmEn0gzH6INodBcXAJuNcD5rsBnwj6R9vaOPo9G8uBd4DXXahLSBUvQxNLqLBaSt7qtyILCY+INndBe/o96K84WkTWGij6HR/DiDtHBObebg8r41xh3A/iOczyIdSqqUow+a0V1cS507WO0C/Jz442e0Kx4C/pL6JglugSOzNcb9wOEjnM+iHEHanz76YBndxQ3AjiOcz9K9Fq83IzbOIRWhNdmB9JmPPnZGd/EgBRcBh+JSqjXGPdS3N8B2wA+IP3aGsYbUMb+MuuxO2jo5+tgZ3V9rh45wPkM9ifQOefTBMbqLR4Gnj3A+S3YyXmtGmfFVYBb1OBx4hPjjZnQX91DQnIAdgVuIPyhGd7GKuhacmAN8m/jjZhhjxTXAk6nHC3AX1hrjdmDnEc5nVrNxQkmt8bcjnM9S7QtcTfwxM4xO4jHS/JRavIn4Y2Z0H5cQOOI0CPxknASNMuPTI5zPUr0MWEb8MTOMbuPfqGdBrU8Qf7yM7uOHBL2J8sEJJGvExxnUsczv2iWko4+XYUwmzifNui/dIPBj4o+X0X28f4Tz2VcvxHWla4wbqGPf852BC4k/XobRi7gNOJjybQEsJP54Gd3FKia4idtEhg52Aq4Atp5IgwrzCGmdhgXRiYzjGcD3qXNRImk0S0m7Up4encg49iFtS7t5dCLqyhLgIODObv6jwS4bGQS+gjf/2qwBXk/5N/8/A87Cm7+aZzbwI+CvoxMZx0LgVaQd6VSPuaR7c1f39G6fBb+VtPyl6vIx0vaSpRoA/gn4JA3YAlMaxSDwPNIrrWeRCvMSLRz6eWxoFurWnqTF+C7qx1++Fy4aUWOcS9mT/mYC3yD+OBlGzvgGZRe7A6QRi+jjZHQXj9DFyq6dzgEYAH4BHN/pX6wiPECafHRrdCKj2Ib0TPSw6ESkAN8nvea6IjqRUWwDXE6d+4S02TnAs0gFwZg6fV7warz512YN6byVevPfkXShevNXW70E+BlpfkCJ7gVeQZplrnocRw/3ppgNLCZ+aMPoLkp+5r8vqTCJPkaGUUJcQNmz7k8h/hgZ3cXtwGYjnMv1dPJs+O+B53Tw51SOBaRXjp6ITmQEhwJnU8fiKFIOuwBHA6cBK4NzGcmvgT8C5gXnoc7NIb3Jce5Yf2i8OQA7kRaPmdmjpNR/y4FDSJuSlOaZpOWj50QnIhXol6S3BB6NTmQEO5G+WGwZnYg6tpw0ef+O0f7AeHMA3oc3/9q8nzJv/kcAP8WbvzSao0lru28SncgI7iC9Bq56zATeNdYfGGsEYB7pfdBaNrMQ/AY4ivIm7TwNOJOyn3NKpTidNEGwxMcBPyItBa86rADmM8pk8LFGAN6BN/+arADeQHk3/4NJM529+UudeR4TWNUtkzcA90QnoY7NAN422m+ONglwK9IFaAFQj3eThg9LchBpwp9LR0vdOZA0hHtWdCIbeIQ0w/yk6ETUsSeRtqZ+bMPfGK0AeDvw7H5mpJ76HakyXxOdyDA7kWagbh+diFSpo4AH6dPSrpNwFWn9jvnRiagj04CHSW9zrGekOQBTgUWkDlzlW03aQa+kTmIO6WI7KDoRqXKrSZtkfTc6kQ3sCvyeDt41VxFuJ83rW+8R8UjPmF6AN/+a/Dtl3fynAf+FN3+pFwaBrwFPjU5kA7eSNvBSHXZmhPV8RhoB+Anw/L6no164l7Sq3v3RiQwZIM0deWV0IlLDLCYVAYujExlmGnAZcEB0IurIj4AXDf8XG44AbIPP/mvyd5Rz84e0ZKg3f6n3dgS+TVkTsx8nbQ9f0twjje55pHv8H2xYAJxMmgOg8l0EfDk6iWFeSFo4SlJ/HEWazV2S84FvRSehjkwlrS/xBxsWAH+eLxdN0ttJE4RKMJ/0nLLE95alJnkN8KboJDbwTkZ4xUxF+rPhvxjeYW8DHJk3F03QD0mVdwlmAd/DhX6kXD4FPCU6iWFuBz4TnYQ6cjRpnR9g/QLgOfgNrgargPdEJzHMl3ASkJTTDOA/ScV3Kf4RuDs6CY1rCnDi2l8Mv+E/N38umoBTSe/f6TvXDAAAERtJREFUluBNpHkjkvLaF/hsdBLDLCUVASrfH+71A8N+3s0GMwRVnEeAvYE7oxMB9iS9AjQ7OhGpxV4NfDU6iSHTSBvI7R6diMZ0J+mtkj+MAOyDN/8a/Ctl3PynAd/Em78U7XPAHtFJDHkc+FB0EhrXDsBesK4AcPJf+ZYDn4hOYsgHKG9lMqmNZpFGAEqZv/UV4KboJDSuI2HdRfP0wETUmVMpYxWww0k7D0oqw5HA/4xOYoijAHV4BqybA3AxcGhcLhrHStKz/1uD85hK2nnw4OA8JK3vUdLn8vroREiPCK+lnEcT2thvgcMHSa8F7B+cjMb2JeJv/pAWH/LmL5VnU9LKoCU8Cngc+Gh0EhrTAcDgAOl1kmuCk9HoVpNW2rsxOI89gAWkjkZSmf6SMpYL3gS4BSeXl2yfQdLNReX6EfE3f4BP481fKt2HKOOm+xjwL9FJaEx7DeI7m6X7ZHQCwJ/gFtFSDbainEl4nyO9vaQy7T4IzIvOQqNaAPwyOIfpwIeDc5DUudcBR0QnAdwDfCM6CY1q90Fg5+gsNKqPRycA/C/SGwiS6jBIWiZ4SnQipI2LVKZdBoG50VloREuI32d7S+C9wTlI6t4hwGujkyCNYv53dBIa0dxBypgwoo19DVgRnMN7gK2Dc5A0MadQxsTdU6MT0IjmDpK+5ak8Xwpuf3vS8L+kOu0EvCU6CeDbwEPRSWgjWw1SRoWo9V0EXBWcwztJ7/JKqte7iB/FexQnA5Zo00HSLG+V5YvB7W8HvCk4B0mTtzll7N3xhegEtJEZA6RlG6dGZ6I/eJS0XePDgTl8DHhHYPuSemc5afvXO4LzuIq0BK3K8MQg3vxL81Nib/5zKWdnMUmTNxN4W3QSxL/VpPVNLWHjCK0v+kPyl8BmwTlI6q03Ev/G1zeBNcE5aBgLgLIsBX4W2P5UfPYvNdFmwN8E53AjaTtxFcICoCw/IG2iEeUkXBlSaqo3kyYFRvpmcPsaxgKgLN8Obj/6G4Kk/tmc9Igv0vfwMUAxBvBklGIZaQJe1Op/hwIXB7UtKY/bgD2AJwJzuAw4OLB9DXEEoBxnErv07+sD25aUxy7AC4Nz+FFw+xpiAVCOnwa2PR3408D2JeUT/ZqvBUAhLADKsAY4I7D9lxC/XKikPI4H9g1s/1Lg9sD2NcQCoAwXA4sD2391YNuS8hoA/iqw/TXEvu6sIRYAZYj8MOwAnBjYvqT8XkVaITDK2YFta4gFQBkiPwwnAVMC25eU3xbETgY8G1gd2L6wACjBo6Ttf6O8NLBtSXFeEdj2EmBBYPvCAqAE5xP3+t9c4KigtiXFeh6pD4jiY4BgFgDxzgls+yW4G6TUVtOAkwPbtwAIZgEQ79zAtl8c2LakeJGPAS7EeQChXAo41iOkyTgRy3JuCtxH7ExgSbHWALsS917+1cD+QW23niMAsX5H3JrcR+PNX2q7AeAFge1fGNh261kAxPpNYNu++y8JYl8H/O/AtlvPAiBW5Ot/zw5sW1I5jgdmB7XtCEAgC4BYvw1qd2dgv6C2JZVlBqkIiLAQeCio7dazAIhzK3Hr/0d92CWVKeoxwBrgyqC2W88CIM5lgW27+I+k4SLnBEX2ha1mARDn8sC2LQAkDbczsEdQ25F9YatZAMS5IqjducA+QW1LKtfRQe1aAASxAIgTVQAcSXr3V5KGiyoArgYeD2q71SwAYjwM3BzU9tOD2pVUtmOC2l0J3BTUdqtZAMS4mrglmA8LaldS2XYbigjXBLXbahYAMRYGtn1wYNuSyhY1QmgBEMACIEZUAbAbsft/SyrbU4LavTao3VazAIgRVQAcEtSupDpEFQCOAASwAIgRVe06/C9pLFF9xHVB7baaBUB+q4ib8XpgULuS6rAtsGNAuw8BDwa022oWAPndBqwIatsNgCSNJ+oxQNSr0a1lAZDfoqB2pwJ7BrUtqR5RI4UWAJlZAOQXdZHvBUwPaltSPaK+KFgAZGYBkN+ioHb3DWpXUl0sAFrCAiC/RUHtzg9qV1JdogqA24PabS0LgPwWBbUbtdWnpLrsAswIaHdxQJutZgGQ3x1B7e4e1K6kugwCuwa0awGQmQVAfncGtWsBIKlTEY8B7iKtk6JMLADyehB4NKDdqIpeUp22DWhzFXB3QLutZQGQV9S3/52IeaYnqU7bBLUb1Ue2kgVAXlHPuHYJaldSnaJ2Db0vqN1WsgDIK2p4a4egdiXVKWoE4P6gdlvJAiCvqOo2YnMPSfWyAGgBC4C8Hghq1xEASd2IegQQ1Ue2kgVAXlEXtyMAkroxJ6hdC4CMLADyirq4twtqV1KdZga16yOAjCwA8ooqALYKaldSnaJ2DrUAyMgCIK+oAmDLoHYl1ckRgBawAMgrqgDYIqhdSXWKWjjMOQAZWQDkZQEgqQZRBYAjABlZAOQVUQBsBkwLaFdSvaIKAFcCzMgCIJ+VxGwE5ARASd0aCGp3BbA8qO3WsQDIx+F/SRqfBUAmFgD5PBTUrm8ASJqIqFGAx4LabR0LgHyiLmpHACTVxBGATCwA8om6qB0BkDQRjgA0nAVAPlEFwOZB7UqqmwVAw1kA5BNVAMwKaleSJsJHAJlYAOQTVdVGvc8rSRPhCEAmFgD5RFW1FgCSJsJHAA1nAZCPBYCkmkQVAD4CyMQCIB8LAEkanyMAmVgA5GMBIKkmPgJoOAuAfCwAJGl8PgLIxAIgHwsASTWJGgFYFdRu61gA5LMiqF0LAEk1sQDIxAIgn6iL2gJA0kREjQCsDmq3dSwA8om6qC0AJNXEAiATC4B8oi7q6UHtSqpb1P3BRwCZWADksyaoXc+xpImI6rMcAcjEm0M+XtSSahI1ByCq8GgdC4B8ogqAqA+xpLr5GmDDWQDkY1UrSeNztDQTC4B8vKgl1cTXABvOAiAfHwFI0vh8BJCJBUA+PgKQVBNHABrOAiAfL2pJGp99ZSYWAPn4CEBSTaL6jilB7baOBUA+3oglaXwWAJlYAOTjsZZUE0cAGs6bUj5e1JJqElUAeF/KxAOdT1QB4IQaSTXxy1ImFgD5TA1q9/GgdiXVzRGAhvNA5xNV1T4R1K4kTYQjAJlYAOQTdVE7AiBpIpwE2HAWAPk4AiBJ4/O+lIkHOh9HACTVxBGAhrMAyMcRAEkanwVAJhYA+TgCIKkmvgXQcB7ofBwBkKTxOQKQiQVAPo4ASKqJcwAazgIgH0cAJGl83pcy8UDn40qAkmriCEDDWQDk4wiApJpYADScBUA+zgGQpPF5X8rEA52PIwCSauIIQMNZAOTjCIAkjc8CIBMLgHwcAZBUExcCajgPdD6OAEjS+BwByMQCIB9HACTVxDkADWcBkI8jAJI0Pu9LmXig84laCMgRAEkT4QhAw1kA5OMIgKSaWAA0nAVAPs4BkKTxeV/KxAOdjyMAkjQ+RwAysQDIxxEASTVxHYBmWzUIrIrOoiWmBbXrCICkibAAaLalg8Aj0Vm0hI8AJNVkTVC7PgLIY+kgsDQ6i5bwNUBJNXEEoNnuHwTui86iJaIKAEcAJNXEEYA8Fg4C10Vn0RI+ApCk8TkCkMfCQWBhdBYt4SMASTXxEUCzXTUIXBGdRUv4CECSxucjgP5bA/xqEDgHWB2cTBv4CEBSTRwBaK6rgLvWTgK8KjiZNnAEQJLGZwHQf2fAugP9w8BE2sI5AJI0Ph8B9N/XYV0B8FXiFn1oC0cAJNXERwDNdDlwJaw70DcAF4Sl0w4WAJI0PguA/vr82n8YfqA/HpBImzgJUFJNXAq4eW4DvrL2F8MLgB8CC7Kn0x5RVa1zACRNRFQB4AhA/3wEWLn2F8MP9BrgA9nTaY+oi9q5HZImImqnWEcA+uNq4NTh/2LDm9IPgJ9kS6ddoibUuMaDpImI6jscAei9NcBfs8Ej4ZEO9Ftwi+B+iLqoLQAkTYQFQHN8Hjhvw3850oG+Cfgf/c6mhaJGAKKG8STVLaoA8BFAb10JvGOk3xit0vom8OV+ZdNSjgBIqokjAPW7H/gT4LGRfnOsA/0m4Bf9yKilLAAk1cQRgLo9BryItM7PiMa6Ka0ETgIu7XFSbeUkQEk1ieo7ovrKJlkJnAycP9YfGu9b6cPAs4Hf9iipNouqai0AJE2EIwB1Wkb65v/T8f5gJ8PSS4DjgZ9PMqm2cwRAUk2cA1CfxcDRDO32N55OD/Qy4PnAB/GGMlEWAJJqsjyoXUcAJuZs4FC6eGzfTaW1CjgFeC5we1dpCZwEKKkeK4lbRtwRgO48ArwdOAG4q5v/cCIH+kxgH9JowMpx/qzWsQCQVIvIxeAsADr3XWA/0mZ+XS/7PtED/ShpNOBJwH/gjnOdGCRmaGsV7gcgqTuPBrU7BR8BjGcN8GPgcNJM/9sm+hdNttK6DngdsDfwT8Atk/z7mm6PoHZHXARCkkYRNQKwY1C7NbgL+CTwZOCP6cHbeb2emDYAPJP06uCxwFOBqT1uo2bHAecGtHsXsF1Au5LqdDnwlIB29wYW4loAkEZvLyXdM84a+tnTeRn9PsibAvOHYndgS2BzYJOh3+uVKcCcHv59kHLtxhPA0mG/XkV6hXJtXEx6lTJiOP460gdLkjpxIXBkUNuHkL5A7gBsDcwFZg793iDpHtKtR4EVPcku9fO9uhEvIz1CX3v/uB9YROqzr6PPj2KsstrhfOI+zJLq8z3SGvJqMGdbtsN10QlIqorzuVrAAqAdFkYnIKkqFgAtYAHQDtdEJyCpKhYALWAB0A4X4IJAkjrnqGELWAC0w33AldFJSKrCHcC10Umo/ywA2iNi/QFJ9TkTVw9tBQuA9vh+dAKSqnB6dALKw3UA2mMAuIG45Yglle9eYBd6t2iOCuYIQHusAb4enYSkov073vxbwxGAdtmVNAowLToRScV5AtgLXwFsDUcA2uVW4BvRSUgq0jfx5t8qjgC0z16kV3zcc1vSWquAA/H1v1ZxBKB9bgC+Gp2EpKJ8B2/+reMIQDttTVrpa+voRCSFWwM8GVgQnYjycgSgne4D3h+dhKQifAdv/q3kCEB7DQK/AI6LTkRSmMeA/YFFwXkogCMA7bUa+Avg7uhEJIX5KN78W8sRAJ0A/AzfCpDa5grgacDK6EQUw05fNwH3AC+ITkRSNo8BzwcWRyeiOBYAAriYNBp0THAekvpvDfAa4KzgPBTMAkBrnQfMBp4RnIek/nof8PnoJBTPAkDDnUnaCOR4nB8iNdF7gQ9FJ6EyWABoQ+eT9gx4DjA1OBdJvfEY8Hrgc9GJqBx+y9NoDgFOA/aMTkTSpFxBeuZ/eXAeKozrAGg0lwKHAv8ZnYikCXkIeBdwGN78NQJHANSJE0hDh3tHJyJpXEuAzwCfBh4MzkUFswBQp2YAbwbeDmwbnIuk9T1BWtr7P4AfkSbzSmOyAFC3NgXeCLwN2Dk4F6nNbgPOBX5KeoPHb/vqigWAJmoK8CzglcBLSIWBpP64A7iatGvf74ALgNtDM1L1LADUC5sBR5F2FjyOtLf4tNCMpHo8Tnpuv4S0OdctwM1DcROwEHggLDs1lgWA+mEqsDuwL7AXMAeYNfQTUsEwvYftzaK3BcccertGxuZM7I2bTv672bheQ6TlpHfsl5I21Xlo2L97eOjfPTz06yWkfTfuGfrne4fi/uxZS1gASG3QScG1CTBznD8zg/Ef9UwlFSXd6OTv7YeVwCPDfr2KdLMebsNv3g+RttJePfTPkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJjfb/AR1GigCvKeYNAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
  
     
     
    );
 }
 
 export default studyspaceicon;