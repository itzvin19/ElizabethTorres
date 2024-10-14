export default function CurvedRibbonShape() {
    return (
      <div className="w-full max-w-md mx-auto">
        <svg
          viewBox="0 0 400 700"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,100 L200,100 L200,20 Q200,0 180,0 L0,0 L60,100 Z"
            fill="blue"
          />
        </svg>
      </div>
    )
  }