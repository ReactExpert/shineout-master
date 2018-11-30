import React from 'react'

function icon(path) {
  return (
    <svg viewBox="0 0 1024 1024">
      { path.map((p, i) => <path key={i} d={p} />) }
    </svg>
  )
}

const success = ['M874 150C674.09-50 349.91-50 150 150s-200 524.09 0 724 524.09 200 724 0 200-524.09 0-724zM760.57 440.57l-256 256a80 80 0 0 1-113.14 0l-128-128a80 80 0 0 1 113.14-113.14L448 526.86l199.43-199.43a80 80 0 0 1 113.14 113.14z']
const close = ['M602.512147 511.99738l402.747939-402.747939a63.999673 63.999673 0 0 0-90.509537-90.509537L512.00261 421.487843 109.254671 18.749904a63.999673 63.999673 0 0 0-90.509537 90.509537L421.493073 511.99738 18.755134 914.745319a63.999673 63.999673 0 0 0 90.509537 90.509537L512.00261 602.506917l402.747939 402.747939a63.999673 63.999673 0 0 0 90.509537-90.509537z']
const warning = ['M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m80 768a80 80 0 0 1-160 0v-32a80 80 0 0 1 160 0v32z m0-256a80 80 0 0 1-160 0V256a80 80 0 0 1 160 0v256z']
const info = ['M512 1024c282.771 0 512-229.23 512-512s-229.23-512-512-512-512 229.23-512 512 229.23 512 512 512zM432 256c0-44.183 35.817-80 80-80s80 35.817 80 80v31.999c0 44.183-35.817 80-80 80s-80-35.817-80-80v-31.999zM431.999 512c0-44.183 35.817-80 80-80s80 35.817 80 80v256c0 44.183-35.817 80-80 80s-80-35.817-80-80v-256z']
const danger = ['M512 0C232 0 5 226.64 4.97250989 506.66666667s226.99620754 507.02749011 507.02749011 507.02749011 507.02749011-226.99620754 507.02749011-507.02749011S792.03128257-0.36082344 512-0.36082344zM701.01984777 685.92623566c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0l-96.51268267-96.51268267-96.51268266 96.51268267c-22.86694019 22.84158802-59.9052983 22.84158802-82.74688632 0-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632L439.01339246 506.66666667l-96.53803365-96.51268267c-22.84158802-22.86694019-22.84158802-59.9052983 0-82.74688632 22.86694019-22.84158802 59.9052983-22.84158802 82.74688632 0l96.51268267 96.51268267 96.51268266-96.51268267c22.86694019-22.84158802 59.9052983-22.86694019 82.74688633 0 22.84158802 22.86694019 22.84158802 59.9052983 0 82.74688632L604.48181413 506.66666667l96.53803364 96.51268267C723.86143696 626.04628952 723.88678795 663.08464763 701.01984777 685.92623566z']
const confirm = ['M514.048 54.272q95.232 0 178.688 36.352t145.92 98.304 98.304 145.408 35.84 178.688-35.84 178.176-98.304 145.408-145.92 98.304-178.688 35.84-178.176-35.84-145.408-98.304-98.304-145.408-35.84-178.176 35.84-178.688 98.304-145.408 145.408-98.304 178.176-36.352zM515.072 826.368q26.624 0 44.544-17.92t17.92-43.52q0-26.624-17.92-44.544t-44.544-17.92-44.544 17.92-17.92 44.544q0 25.6 17.92 43.52t44.544 17.92zM567.296 574.464q-1.024-16.384 20.48-34.816t48.128-40.96 49.152-50.688 24.576-65.024q2.048-39.936-8.192-74.752t-33.792-59.904-60.928-39.936-87.552-14.848q-62.464 0-103.936 22.016t-67.072 53.248-35.84 64.512-9.216 55.808q1.024 26.624 16.896 38.912t34.304 12.8 33.792-10.24 15.36-31.232q0-12.288 7.68-30.208t20.992-34.304 32.256-27.648 42.496-11.264q46.08 0 73.728 23.04t25.6 57.856q0 17.408-10.24 32.256t-26.112 28.672-33.792 27.648-33.792 28.672-26.624 32.256-11.776 37.888l1.024 38.912q0 15.36 14.336 29.184t37.888 14.848q23.552-1.024 37.376-15.36t12.8-32.768l0-24.576z']
const calendar = ['M888 128H768v-28c0-19.9-16.1-36-36-36s-36 16.1-36 36v28H328v-28c0-19.9-16.1-36-36-36s-36 16.1-36 36v28H136c-39.8 0-72 32.2-72 72v688c0 39.8 32.2 72 72 72h752c39.8 0 72-32.3 72-72V200c0-39.8-32.2-72-72-72z m-752 72h120v20c0 19.9 16.1 36 36 36s36-16.1 36-36v-20h368v20c0 19.9 16.1 36 36 36s36-16.1 36-36v-20h120v112H136V200z m752 688H136V384h752v504zM288 512h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z m192 0h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z m192 0h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32zM288 706h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z m192 0h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32z']
const clock = ['M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m311.1 823.1c-40.4 40.4-87.5 72.2-139.9 94.3C629 940.4 571.4 952 512 952s-117-11.6-171.2-34.5c-52.4-22.2-99.4-53.9-139.9-94.3-40.4-40.4-72.2-87.5-94.3-139.9C83.6 629 72 571.4 72 512s11.6-117 34.5-171.2c22.2-52.4 53.9-99.4 94.3-139.9 40.4-40.4 87.5-72.2 139.9-94.3C395 83.6 452.6 72 512 72s117 11.6 171.2 34.5c52.4 22.2 99.4 53.9 139.9 94.3 40.4 40.4 72.2 87.5 94.3 139.9C940.4 395 952 452.6 952 512s-11.6 117-34.5 171.2c-22.2 52.4-53.9 99.5-94.4 139.9zM733 504H548V264c0-19.9-16.1-36-36-36s-36 16.1-36 36v240c0 39.8 32.2 72 72 72h185c19.9 0 36-16.1 36-36s-16.1-36-36-36z']
const closeCircle = ['M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m205.3 666.9c14 14.1 14 36.9-0.1 50.9-7 7-16.2 10.5-25.4 10.5s-18.5-3.5-25.5-10.6L512 563 357.7 717.7c-7 7.1-16.3 10.6-25.5 10.6s-18.4-3.5-25.4-10.5c-14.1-14-14.1-36.8-0.1-50.9L461.2 512 306.7 357.1c-14-14.1-14-36.9 0.1-50.9s36.9-14 50.9 0.1L512 461l154.3-154.8c14-14.1 36.8-14.1 50.9-0.1 14.1 14 14.1 36.8 0.1 50.9L562.8 512l154.5 154.9z']
const recovery = ['M172.48576 236.450998C136.975206 271.874676 110.324493 311.941187 92.439616 356.650531 74.383834 401.273 65.011296 447.272653 64.065638 494.689368 63.206854 542.107506 70.772109 589.267867 86.937997 636.257327 102.92729 683.20121 127.60409 726.449344 160.706355 766.041606 162.597664 768.791699 164.316653 771.201414 165.866163 773.262208 167.586573 775.369997 169.476467 777.563238 171.711008 779.840506L291.222662 899.312282C299.047117 907.135309 308.161882 913.454406 318.564102 918.269568 328.882304 923.084723 339.374253 926.13817 350.292032 927.253306 361.038906 928.415437 371.698912 927.683405 382.017107 925.191091 392.335306 922.653197 401.018543 917.924915 407.897342 911.004813 414.863016 904.126016 419.676751 895.613677 422.426847 885.426502 425.178366 875.364659 425.866246 865.003738 424.490486 854.429184 423.114726 843.81191 420.10543 833.449562 415.549472 823.34784 410.906639 813.204813 404.71572 804.260954 396.891264 796.436493L289.160442 690.081434C264.742842 665.662413 246.25696 638.234091 233.61735 607.624148 220.892282 576.974328 214.185811 546.021158 213.238726 514.723335 212.293069 483.471086 217.451456 452.905293 228.802189 423.242431 240.066042 393.579569 257.433946 366.967306 280.904461 343.495363 303.003494 321.39918 327.851194 304.848761 355.362118 293.755808 383.048218 282.751154 411.76542 276.860737 441.428282 276.172858 471.091144 275.484977 500.323903 280.085085 529.041108 289.97318 557.843764 299.859852 584.669655 314.950484 609.517357 335.198079 610.463014 336.143735 610.893117 336.831615 610.893117 337.304444 610.893117 337.778696 611.408671 338.379701 612.268877 339.325358L722.066185 449.121242 667.468746 503.675956C659.731165 511.500412 656.979645 520.355974 659.558839 530.242646 662.138033 540.130741 674.432995 547.82702 696.530603 553.371361 702.549196 554.789846 712.350416 556.638434 726.278915 558.917125 740.036513 561.194392 756.200978 563.861885 774.944637 566.828456 793.51597 569.834904 813.205285 572.931076 833.925709 576.155424L894.627192 584.454132C907.094481 585.828468 918.013684 586.859575 927.471676 587.591605 936.929668 588.278061 944.839575 585.399789 951.286847 578.949668 956.876761 573.44663 959.626856 564.719243 959.971508 553.069434 960.14241 541.290025 959.541405 528.737286 958.251096 515.411215 956.876761 500.236556 954.984023 482.266228 952.748058 461.587106 950.342614 440.866683 947.934323 420.489487 945.44058 400.45552 942.946837 380.422977 940.712296 362.367197 938.819558 346.289608 937.015119 330.125142 935.552484 318.861287 934.692278 312.412591 931.510656 293.540756 924.116303 282.964781 912.681546 280.68609 901.159914 278.364673 890.498488 281.589021 880.86817 290.316408L825.669725 345.557578 715.788391 235.761694C713.55385 233.483003 710.887781 231.333912 707.878484 229.183398 704.954639 227.163908 702.030794 225.228445 699.279274 223.379857 659.729741 191.095076 616.652509 167.020704 570.138726 150.900388 523.70897 134.735923 476.765085 127.169244 429.304221 128.072175 381.930234 129.017832 336.016032 138.561276 291.564461 156.745231 247.202618 174.933459 207.479334 201.501573 172.48576 236.450998']
const del = [
  'M974.991554 109.146486 647.781177 109.146486c0-2.225921 2.225921-4.451842 2.225921-6.677763 0-55.648023-46.74434-102.392363-102.392363-102.392363l-66.777628 0C422.963163-2.14956 378.444744 44.594779 378.444744 100.242803c0 2.225921 0 4.451842 2.225921 6.677763L49.008446 106.920565c-22.259209 0-40.066577 17.807367-40.066577 40.066577s17.807367 40.066577 40.066577 40.066577l77.907233 0 0 636.613387c0 111.296047 91.262758 200.332884 200.332884 200.332884l389.536163 0c111.296047 0 200.332884-91.262758 200.332884-200.332884L917.11761 189.27964l60.099865 0c22.259209 0 40.066577-17.807367 40.066577-40.066577S997.250763 109.146486 974.991554 109.146486zM458.577898 100.242803c0-11.129605 11.129605-22.259209 22.259209-22.259209l66.777628 0c11.129605 0 22.259209 11.129605 22.259209 22.259209 0 2.225921 0 4.451842 2.225921 6.677763l-113.521968 0C456.351977 106.920565 458.577898 102.468724 458.577898 100.242803zM836.984456 825.893026c0 66.777628-53.422102 120.19973-120.19973 120.19973L327.248563 946.092757c-66.777628 0-120.19973-53.422102-120.19973-120.19973L207.048832 189.27964l629.935624 0L836.984456 825.893026z',
  'M411.833558 756.889478c22.259209 0 40.066577-17.807367 40.066577-40.066577l0-311.62893c0-22.259209-17.807367-40.066577-40.066577-40.066577s-40.066577 17.807367-40.066577 40.066577l0 311.62893C371.766981 739.08211 389.574349 756.889478 411.833558 756.889478z',
  'M632.19973 756.889478c22.259209 0 40.066577-17.807367 40.066577-40.066577l0-311.62893c0-22.259209-17.807367-40.066577-40.066577-40.066577-22.259209 0-40.066577 17.807367-40.066577 40.066577l0 311.62893C592.133154 739.08211 609.940521 756.889478 632.19973 756.889478z',
]

const angleLeft = [
  'M304.905 561.68c-11.785 0-23.57-4.496-32.562-13.488-17.984-17.983-17.984-47.139 0-65.122l402.522-402.522c17.982-17.983 47.14-17.983 65.122 0 17.984 17.984 17.984 47.14 0 65.123l-402.521 402.521c-8.992 8.993-20.776 13.488-32.562 13.488z',
  'M707.426 964.201c-11.785 0-23.57-4.496-32.561-13.488l-402.523-402.522c-17.984-17.983-17.984-47.139 0-65.122 17.983-17.983 47.14-17.983 65.123 0l402.521 402.522c17.984 17.983 17.984 47.139 0 65.122-8.991 8.992-20.776 13.488-32.561 13.488z',
]
const angleRight = [
  'M728.76 561.68c-11.785 0-23.57-4.496-32.561-13.488l-402.523-402.521c-17.984-17.984-17.984-47.14 0-65.123 17.983-17.983 47.14-17.983 65.123 0l402.521 402.522c17.984 17.984 17.984 47.14 0 65.122-8.991 8.993-20.776 13.488-32.561 13.488z',
  'M326.238 964.202c-11.785 0-23.57-4.496-32.562-13.488-17.984-17.983-17.984-47.139 0-65.122l402.522-402.522c17.982-17.983 47.14-17.983 65.122 0 17.984 17.984 17.984 47.14 0 65.122l-402.521 402.522c-8.992 8.992-20.776 13.488-32.562 13.488z',
]
const angleDoubleLeft = [
  'M219.5 511.3l336.7-336.7c25-25 25-65.4 0-90.4-25-24.9-65.4-24.9-90.4 0L86.5 463.5c-0.9 0.8-1.8 1.7-2.7 2.5-25 25-25 65.4 0 90.4l381.3 381.3c25 25 65.4 25 90.4 0s25-65.4 0-90.4l-336-336z',
  'M601.5 511.5l336.7-336.7c25-25 25-65.4 0-90.4-25-24.9-65.4-24.9-90.4 0L468.5 463.7c-0.9 0.8-1.8 1.7-2.7 2.5-25 25-25 65.4 0 90.4l381.3 381.3c25 25 65.4 25 90.4 0s25-65.4 0-90.4l-336-336z',
]
const angleDoubleRight = [
  'M802.5 511.3L465.8 174.6c-25-25-25-65.4 0-90.4 25-24.9 65.4-24.9 90.4 0l379.3 379.3c0.9 0.8 1.8 1.7 2.7 2.5 25 25 25 65.4 0 90.4L556.9 937.7c-25 25-65.4 25-90.4 0s-25-65.4 0-90.4l336-336z',
  'M420.5 511.5L83.8 174.8c-25-25-25-65.4 0-90.4 25-24.9 65.4-24.9 90.4 0l379.3 379.3c0.9 0.8 1.8 1.7 2.7 2.5 25 25 25 65.4 0 90.4L174.9 937.9c-25 25-65.4 25-90.4 0s-25-65.4 0-90.4l336-336z',
]

export default {
  AngleLeft: icon(angleLeft),
  AngleRight: icon(angleRight),
  AngleDoubleLeft: icon(angleDoubleLeft),
  AngleDoubleRight: icon(angleDoubleRight),

  Calendar: icon(calendar),
  Clock: icon(clock),
  Close: icon(close),
  CloseCircle: icon(closeCircle),
  Confirm: icon(confirm),
  Danger: icon(danger),
  Delete: icon(del),
  Error: icon(danger),
  Info: icon(info),
  Success: icon(success),
  Recovery: icon(recovery),
  Warning: icon(warning),
}
