import Link from "next/link";

export default function Bio() {
  return (
    <div className="space-y-2 mb-8">
      <p>
        • backend engineer based in <span className="text-white">india</span>
      </p>
      <p>
        • worked with{" "}
        <Link
          href="https://www.linkedin.com/in/abhishek-kumar-531512176/details/experience/"
          className="text-white hover:underline"
        >
          few startups
        </Link>
        , currently{" "}
        <Link
          href="https://www.linkedin.com/company/tataelxsi"
          className="text-white hover:underline"
        >
          @Tata Elxsi
        </Link>
      </p>
      <p>
        • currently building things from scratch to learn.{" "}
        {/* <Link
          href="https://github.com/iamAbhishekkumar/gitlite"
          className="text-white hover:underline"
        >
          Check out GitLite
        </Link>
       */}
      </p>
    </div>
  );
}
