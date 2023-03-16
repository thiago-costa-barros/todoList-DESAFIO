function DeleteSVG(props) {
  return (
    <svg
      height={32}
      viewBox="0 0 35 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0h31a4 4 0 014 4v33.5H0V0z" fill="#CE0000" />
      <path
        d="M26.094 12.11H8.906M15.156 16.406v6.25M19.844 16.406v6.25M24.531 12.11v14.453a.781.781 0 01-.781.78h-12.5a.781.781 0 01-.781-.78V12.108"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.406 12.11V9.765a1.563 1.563 0 00-1.562-1.563h-4.688a1.562 1.562 0 00-1.562 1.563v2.343"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default DeleteSVG;
