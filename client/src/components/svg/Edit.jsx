function EditSVG(props) {
    return (
        <svg
        height={32}
        viewBox="0 0 35 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M0 .5h35V34a4 4 0 01-4 4H0V.5z" fill="#797979" />
        <path
          d="M17.5 22.375h-3.125V19.25l9.375-9.375L26.875 13 17.5 22.375zM21.406 12.219l3.125 3.125"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.094 18.469v8.593a.781.781 0 01-.782.782H9.688a.781.781 0 01-.78-.782V11.438a.781.781 0 01.78-.78h8.594"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  
  export default EditSVG