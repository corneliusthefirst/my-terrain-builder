import { IconPropsType } from "../types/icon.type"

export default function GrassIcon({
  viewBox,
  width = 32,
  height = 48,
  fill = "green",
  ...props
}: IconPropsType) {
  return (
    <svg
      {...props}
      fill={fill}
      width={width}
      height={height}
      viewBox={viewBox || `0 0 100 100`}
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icon">
        <path d="M47.265,74.675c2.12,0.08 4.263,0.687 6.425,0.732c4.388,0.092 8.537,-0.696 12.807,-1.593c0.54,-0.114 0.887,-0.644 0.773,-1.184c-0.113,-0.54 -0.644,-0.887 -1.184,-0.773c-4.12,0.865 -8.121,1.639 -12.354,1.551c-2.151,-0.045 -4.282,-0.652 -6.391,-0.732c-0.552,-0.021 -1.016,0.41 -1.037,0.962c-0.021,0.551 0.41,1.016 0.961,1.037Zm1.811,-21.499c-0.63,-4.829 -1.044,-9.666 -1.677,-14.506c-0.29,-2.22 -0.584,-4.454 -1.056,-6.644c-0.529,-2.458 -1.393,-4.86 -1.734,-7.356c-0.005,-0.039 -0.013,-0.077 -0.022,-0.115c0.019,-0.42 -0.231,-0.824 -0.646,-0.981c-0.516,-0.196 -1.094,0.065 -1.289,0.581c-2.162,5.714 -2.653,11.495 -1.378,17.497c0.618,2.909 1.75,5.694 2.84,8.47c-1.756,-2.472 -3.777,-4.714 -5.949,-6.6c-2.629,-2.283 -4.826,-4.306 -8.409,-4.731c-0.143,-0.017 -0.281,-0.003 -0.41,0.037c-0.09,-0 -0.181,0.012 -0.272,0.038c-0.531,0.149 -0.841,0.702 -0.691,1.233c0.58,2.062 1.387,4.006 2.67,5.751c1.961,2.668 5.058,4.842 7.474,7.087c2.092,1.943 4.002,3.961 5.596,6.173c-0.173,-0.17 -0.349,-0.337 -0.526,-0.502c-1.863,-1.731 -3.844,-3.346 -5.907,-4.828c-1.615,-1.161 -3.46,-1.866 -5.197,-2.808c-5.572,-3.022 -11.357,-4.993 -17.753,-4.866c-2.336,0.046 -4.662,0.254 -6.847,1.14c-0.405,0.164 -0.644,0.563 -0.624,0.976c-0.022,0.44 0.251,0.859 0.69,1.001c5.796,1.885 11.389,4.197 17.049,6.449c4.256,1.694 8.673,3.295 12.603,5.682c1.02,0.619 2.039,1.313 3.035,2.046c-0.033,-0.013 -0.065,-0.026 -0.097,-0.038c-5.014,-1.959 -10.167,-2.019 -15.452,-2.393c-0.551,-0.039 -1.029,0.377 -1.068,0.927c-0.006,0.087 -0.001,0.172 0.014,0.253c-0.042,0.268 0.024,0.553 0.207,0.781c2.021,2.522 4.594,3.005 7.649,3.465c0.379,0.057 0.757,0.107 1.135,0.152c-0.789,0.148 -1.577,0.31 -2.367,0.454c-2.191,0.398 -4.485,1.149 -6.402,2.316c-0.338,0.206 -0.96,0.555 -1.373,0.941c-0.293,0.273 -0.497,0.576 -0.594,0.865c-0.174,0.524 0.109,1.091 0.633,1.265c0.507,0.169 1.054,-0.091 1.247,-0.583c0.035,-0.033 0.206,-0.197 0.323,-0.28c0.288,-0.205 0.607,-0.379 0.804,-0.499c1.711,-1.042 3.764,-1.702 5.72,-2.058c1.904,-0.346 3.791,-0.811 5.731,-0.903c5.813,-0.277 11.871,0.759 17.335,2.747c0.519,0.188 1.093,-0.08 1.282,-0.599c0.188,-0.518 -0.08,-1.092 -0.598,-1.281c-0.731,-0.266 -1.471,-0.515 -2.22,-0.747c2.374,-0.429 4.737,-0.847 7.15,-0.99c3.996,-0.237 8.136,0.064 12.077,0.727c1.595,0.268 3.258,0.399 4.804,0.895c1.575,0.505 3.02,1.383 4.491,2.119c0.494,0.247 1.095,0.046 1.342,-0.447c0.247,-0.494 0.046,-1.095 -0.447,-1.342c-1.562,-0.781 -3.103,-1.698 -4.775,-2.235c-1.637,-0.525 -3.395,-0.678 -5.083,-0.962c-2.382,-0.401 -4.834,-0.673 -7.285,-0.782c5.101,-1.448 10.114,-3.339 14.643,-5.895c0.318,-0.179 0.5,-0.507 0.508,-0.847c0.076,-0.142 0.117,-0.304 0.116,-0.476c-0.006,-0.552 -0.459,-0.995 -1.011,-0.99c-4.145,0.043 -8.154,0.545 -12.047,1.616c2.805,-1.758 5.603,-3.531 8.427,-5.271c6.11,-3.766 12.414,-7.091 17.133,-12.62c0.088,-0.104 0.152,-0.221 0.191,-0.343c0.155,-0.251 0.198,-0.567 0.091,-0.865c-0.187,-0.519 -0.761,-0.789 -1.28,-0.602c-7.245,2.61 -14.671,5.791 -21.015,10.181c-0.923,0.638 -1.825,1.303 -2.712,1.988c0.568,-0.792 1.121,-1.594 1.7,-2.37c2.322,-3.109 4.57,-6.31 5.662,-10.082c0.046,-0.159 0.051,-0.32 0.021,-0.472c0.075,-0.316 -0.005,-0.664 -0.244,-0.918c-0.379,-0.402 -1.012,-0.421 -1.414,-0.043c-1.76,1.657 -3.82,2.952 -5.61,4.583c-4.471,4.071 -8.909,8.689 -12.518,13.801c0.555,-1.722 1.096,-3.448 1.602,-5.186c1.295,-4.449 1.906,-8.998 2.845,-13.517c0.812,-3.905 1.668,-7.761 2.059,-11.738c0.393,-3.993 0.089,-7.998 -0.133,-11.982c-0.007,-0.126 -0.037,-0.245 -0.086,-0.354c-0.105,-0.289 -0.341,-0.526 -0.658,-0.62c-0.529,-0.156 -1.086,0.147 -1.242,0.676c-3.282,11.123 -7.908,21.877 -10.013,33.327c-0.423,2.305 -0.651,4.656 -0.768,7.027Zm-13.681,18.435c2.3,-0.671 4.25,-0.731 6.633,-0.241c0.54,0.111 1.07,-0.237 1.181,-0.778c0.111,-0.54 -0.237,-1.069 -0.778,-1.181c-2.729,-0.561 -4.962,-0.489 -7.597,0.28c-0.529,0.155 -0.834,0.71 -0.679,1.24c0.154,0.53 0.71,0.835 1.24,0.68Zm12.05,-5.01c-1.415,-2.392 -3.189,-4.65 -5.21,-6.528c-1.801,-1.674 -3.717,-3.235 -5.712,-4.669c-1.546,-1.112 -3.32,-1.772 -4.983,-2.674c-5.263,-2.854 -10.719,-4.744 -16.761,-4.625c-1.078,0.021 -2.155,0.074 -3.213,0.229c4.784,1.682 9.46,3.601 14.182,5.48c4.358,1.734 8.877,3.386 12.902,5.83c2.299,1.397 4.6,3.157 6.648,4.901c0.757,0.645 1.412,1.394 2.147,2.056Zm-19.986,-3.477c1.373,0.815 2.972,1.027 4.738,1.293c2.665,0.401 5.286,0.47 7.908,0.919c-0.095,-0.038 -0.19,-0.075 -0.284,-0.111c-4.027,-1.574 -8.152,-1.845 -12.362,-2.101Zm47.951,-3.993c-5.078,0.425 -9.943,1.654 -14.632,3.932c-1.085,0.527 -2.098,1.17 -3.108,1.818c6.019,-1.296 12.162,-3.082 17.74,-5.75Zm-3.195,-18.244c-0.98,0.752 -1.965,1.499 -2.881,2.333c-6.183,5.632 -12.326,12.322 -16.146,19.958c3.592,-3.538 7.351,-6.915 10.843,-10.538c1.502,-1.56 2.649,-3.435 3.939,-5.162c1.569,-2.102 3.119,-4.238 4.245,-6.591Zm-12.087,-22.234c-3.021,9.217 -6.559,18.292 -8.317,27.857c-0.973,5.297 -0.884,10.846 -0.802,16.294c1.375,-4.337 2.87,-8.635 4.142,-13.006c1.281,-4.399 1.88,-8.897 2.808,-13.365c0.797,-3.835 1.642,-7.621 2.027,-11.527c0.205,-2.083 0.212,-4.169 0.142,-6.253Zm28.15,23.602c-5.775,2.259 -11.516,4.959 -16.555,8.446c-4.535,3.137 -8.568,6.926 -12.765,10.502c5.202,-3.116 10.287,-6.414 15.458,-9.601c4.793,-2.954 9.728,-5.606 13.862,-9.347Zm-57.506,-1.236c0.463,1.291 1.062,2.517 1.893,3.647c1.889,2.571 4.895,4.643 7.224,6.805c2.773,2.576 5.231,5.287 7.116,8.363c-2.047,-5.691 -5.78,-11.006 -10.151,-14.802c-1.987,-1.725 -3.651,-3.354 -6.082,-4.013Zm12.614,-12.498c-1.011,4.159 -1.077,8.376 -0.156,12.716c0.771,3.628 2.376,7.055 3.654,10.522c-0.518,-4.272 -0.908,-8.55 -1.468,-12.829c-0.283,-2.166 -0.568,-4.347 -1.028,-6.483c-0.284,-1.317 -0.659,-2.618 -1.002,-3.926Z" />
      </g>
    </svg>
  )
}