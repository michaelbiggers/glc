export default function Footer() {
  return (
    <footer className = "py-24">
      <div className="flex flex-wrap items-center content-between divide-x">
        <div className="basis-1/3 ps-24">
          <h3>Speech Therapy & Developmental Evaluations</h3>
          <p><a href = "tel:8644512563">864.451.2563</a> | <a href = '/contact'>Contact</a></p>
        </div>
        <div className="basis-1/3 ps-24">
          <h3>Main Location</h3>
          <p>122 Memorial Dr<br />
          Greer, SC 29650-1517</p>
        </div>
        <div className="basis-1/3 ps-24">
          <h3>Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      {/* 3 columns */}

    </footer>
  )
}