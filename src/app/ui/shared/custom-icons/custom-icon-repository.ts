export enum CustomIcons {
    Kayak = 'custom:kayak'
}

const svgRepository = {
    [CustomIcons.Kayak]: '<svg id="Layer_1" enable-background="new 0 0 512.042 512.042" viewBox="0 0 512.042 512.042" xmlns="http://www.w3.org/2000/svg"><g><path d="m332.378 198.527-42.302 36.939c21.638-.016 39.481-16.025 42.302-36.939z"/><path d="m252.317 212.654 62.526-54.598c-8.557-6.097-19.362-9.074-30.59-7.521-23.344 3.227-39.651 24.767-36.424 48.111.696 5.04 2.25 9.75 4.488 14.008z"/><path d="m88.044 356.098 42.145-36.801-28.315 7.635c-11.314 3.05-18.012 14.695-14.961 26.009.296 1.099.681 2.15 1.131 3.157z"/><path d="m391.32 78.789c-11.686-.842-21.841 7.959-22.678 19.647l-.966 13.485 33.911-29.611c-2.961-1.982-6.458-3.249-10.267-3.521z"/><path d="m149.796 357.96 44.095-11.89c2.231-.601 4.348-1.563 6.269-2.847l44.141-29.511 4.782 34.586c24.741-15.786 44.572-26.127 45.667-26.696 1.694-.879 3.548-1.319 5.403-1.319s3.709.44 5.403 1.319c1.222.634 25.749 13.427 54.4 32.368l-10.103-73.076c.129-.183.263-.359.386-.548l50.716-76.992c1.999-3.035 3.185-6.531 3.444-10.156l4.396-61.401-45.38 39.626-.946 13.217-41.452 62.928s-2.613.091-52.668 6.868z"/><path d="m161.54 449.908c17.709 1.507 28.323 8.772 35.608 13.766 5.995 4.109 8.014 5.493 14.703 5.493 6.687 0 8.707-1.384 14.701-5.493 8.163-5.595 20.499-14.051 42.324-14.051s34.162 8.455 42.325 14.051c5.995 4.109 8.014 5.493 14.703 5.493s8.709-1.384 14.703-5.493c8.164-5.595 20.5-14.05 42.326-14.05s34.162 8.455 42.326 14.05c5.815 3.985 7.903 5.403 14.125 5.486.452-3.239.688-6.523.688-9.847 0-54.657-139.919-127.302-139.919-127.302s-124.563 64.679-138.613 117.897z"/><path d="m509.531 32.745-18.582-20.782c-3.63-4.06-9.865-4.409-13.925-.778l-43.234 38.658c-4.051 3.623-4.39 9.886-.778 13.925l3.023 3.381-372.505 325.274-3.082-3.447c-3.608-4.035-9.87-4.404-13.925-.778l-43.234 38.659c-4.06 3.63-4.409 9.865-.778 13.925l17.808 19.916c4.362-6.667 11.89-11.075 20.452-11.075 2.83 0 5.497.145 8.02.404l29.462-26.343c4.035-3.608 4.415-9.858.778-13.925l-2.473-2.765 372.504-325.275 2.532 2.831c3.625 4.055 9.879 4.396 13.925.778l43.235-38.658c4.059-3.63 4.408-9.864.777-13.925z"/><path d="m496.996 464.28c-17.285 0-26.576 6.367-34.04 11.483-6.571 4.503-11.761 8.06-22.991 8.06-11.231 0-16.421-3.557-22.992-8.06-7.465-5.116-16.755-11.483-34.04-11.483-17.284 0-26.575 6.367-34.039 11.483-6.571 4.503-11.76 8.06-22.99 8.06s-16.419-3.557-22.99-8.06c-7.464-5.116-16.754-11.483-34.038-11.483s-26.573 6.367-34.037 11.483c-6.57 4.503-11.759 8.06-22.988 8.06-11.23 0-16.419-3.557-22.99-8.06-7.464-5.116-16.753-11.483-34.037-11.483-17.285 0-26.574 6.367-34.038 11.483-6.571 4.503-11.76 8.06-22.99 8.06-11.229 0-16.419-3.557-22.988-8.06-7.464-5.116-16.754-11.483-34.037-11.483-5.397 0-9.772 4.375-9.772 9.772s4.375 9.772 9.772 9.772c11.229 0 16.419 3.557 22.988 8.06 7.464 5.116 16.754 11.483 34.037 11.483 17.284 0 26.574-6.367 34.038-11.483 6.571-4.503 11.76-8.06 22.99-8.06 11.229 0 16.419 3.557 22.989 8.06 7.465 5.116 16.754 11.483 34.038 11.483s26.573-6.367 34.037-11.483c6.57-4.503 11.759-8.06 22.988-8.06 11.23 0 16.419 3.557 22.99 8.06 7.464 5.116 16.754 11.483 34.038 11.483s26.574-6.367 34.038-11.483c6.571-4.503 11.76-8.06 22.99-8.06 11.231 0 16.421 3.557 22.992 8.06 7.465 5.116 16.755 11.483 34.04 11.483s26.575-6.367 34.04-11.483c6.571-4.503 11.761-8.06 22.992-8.06 5.397 0 9.772-4.375 9.772-9.772s-4.375-9.772-9.772-9.772z"/></g></svg>',
}

export const getCustomIconSVG = (customIcon: CustomIcons): string => {
    const svg = svgRepository[customIcon];
    if( !svg ) throw new Error( `svg not found for icon ${customIcon}` );
    return svg;
}