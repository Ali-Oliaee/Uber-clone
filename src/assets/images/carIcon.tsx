import React from 'react';
import {SvgProps, SvgXml} from 'react-native-svg';

const CarICon = ({...props}: SvgProps) => {
  const xml = `
<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g filter="url(#filter0_d_9_143)">
<rect x="4" width="60" height="60" rx="10" fill="url(#pattern0)"/>
</g>
<defs>
<filter id="filter0_d_9_143" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_143"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_143" result="shape"/>
</filter>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_9_143" transform="translate(-0.251366) scale(0.00546448)"/>
</pattern>
<image id="image0_9_143" width="275" height="183" xlink:href="data:image/png;base64,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czhnKHBASK5eatsFTCLvBcr1N3aB0w4eLBHrTbg34iYROwnxBSC4MRdffHF11d773veWk08+uZx00kk1P+WUU6rr9sEPfrB85jOfKV/84herWyc+ZL+AHrnFX8CHTKV+8I62mS9dCSRMZil/g713gKsLkFDqsEAiXgAYYMDFoWCHHnpo2XfffcvWW29dFixYUFZeeeXy5Cc/uTz2sY8ta665ZllhhRXKcsstV+tsmzdvXtloo43KjjvuWPbff/9y7LHHltNPP71C5vLLL68WS0CKAlYL5FcWBMskrq1CqAFDL1CARbxE/XU3XF+4PGBixSywAMr//M//VNC95jWvKQcccEDZZpttyhZbbFGvbc899yy777572Wuvvcp+++1Xtx900EHlec97XnnZy15WXve619X0qle9qrzzne+sxwI6wHPN/rg9rBsyTZjMcrAu4d0TJrMUcD+YhDvBImE5gIfgquldyZ1Ybpr3xBNPLE95ylPK8ssvX4Gx4oorlqc97Wk1AYnPYLLSSiuV1VZbrayxxhpl1VVXrWB5/OMfX7c/4QlPKI973OPKKqusUpX5JS95Sfnc5z5XrRPnp5yuiYIqAwoLqbpBv4JJWBr9gMIqARAuj3Zf+dpXy5vf+pZy2OHPKeutt17ZYIMNysYbb1w222yzstVWW5Vtt922bL/99mWHHXYou+yyS02g8oxnPKMceOCB5ZBDDqkJWI477rjywhe+sBx55JHlHe94R40ZcX9cH+hxlVqg9IJ7lt2Xu49RAgmTWQpzEEwobZjt3Jdvfetb5atf/Wq1Rr7//e/XRWcslfM7VwYcwILFwTJZZ511KmDA4alPfWqFyOqrr17BATxgAzRrrbVWBY022qqTP+lJTyrasxDMDv3gBz9YHMMIi4UF0FomINECJdwd8RL13/ned8upp72nHHTIwWXhRhuWNdZas6w9f50KEjDZcMMNK1A23XTTsvnmm9dzb7nllmWnnXaqaeeddy677rpr2WOPPaoVFlA54ogjqmV1zDHHVIvl+OOPr+5cxJBaoPST9Sy7L3cfowQSJmMUpkOxAFgkFFXOxWEdmJWh1Bagfec736kwARnuDheABQIE8+fPL2uvvXaFSVgmXBvbIgcTAJLUD0vLLLNMdTUseAuAuOuDnWu8+prryj333l+uufb6ctvtd1brQ37nXfeUu+6+t3z+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"/>
</defs>
</svg>
`;
  return <SvgXml {...props} xml={xml} />;
};

export default CarICon;
