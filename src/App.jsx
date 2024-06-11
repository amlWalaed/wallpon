import { useState } from "react";

function App() {
  const navLinks = [
    {
      label: "Features",
    },
    {
      label: "How It Works",
    },
    {
      label: "Benefits",
    },
    {
      label: "FAQ",
    },
    {
      label: "Become An Agent",
    },
    {
      label: "Contact",
    },
  ];
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const features = [
    {
      icon: "./icons/dollar-sign.svg",
      title: "Lucrative Earnings",
      description:
        "Imagine this: an eye-popping 50% commission on every single client you assist! Plus, unlock the potential for massive monthly residual income that keeps growing with every deal closed. ",
    },
    {
      icon: "./icons/coffee.svg",
      title: "Flexible Work",
      description:
        "Break free from the shackles of the 9-to-5 grind! Whether you’re a gig economy pro, a college student, a military spouse, or a single parent, WallPon empowers you to thrive on your own terms.",
    },
    {
      icon: "./icons/pie-chart.svg",
      title: "Become an Owner",
      description:
        "Dream of owning a piece of the pie? As a WallPon gig agent, you have the opportunity to earn ownership shares in the company, transforming you into a valued employee owner! ",
    },
    {
      icon: "./icons/briefcase.svg",
      title: "Empowerment Through Expertise",
      description:
        "You're not just a sales agent, you're a future marketing advisor! WallPon offers comprehensive training to help you become a trusted advisor, own your book of business and building lasting client relationships with clients you invite onto the WallPon app.",
    },
    {
      icon: "./icons/gift.svg",
      title: "Comprehensive Benefits",
      description:
        "Say hello to peace of mind! We’ve got you covered with fully-funded health, dental, and vision insurance plans, ensuring your well-being always comes first.",
    },
  ];
  const requirements = [
    {
      icon: "./icons/badge.svg",
      title: "Legal adult age",
      description: "18 years old or older.",
    },
    {
      icon: "./icons/schedule.svg",
      title: "Available Time",
      description: "Weekly time availability",
    },
    {
      icon: "./icons/directions_car.svg",
      title: "Self-Mobility",
      description: "Means for transportation.",
    },
  ];
  return (
    <>
      {/* start of navbar */}
      <nav className="container flex items-center justify-between gap-3 py-4">
        <div className="max-w-36">
          <img
            alt="App Logo"
            src="./images/logo.png"
            className="object-contain w-full"
          />
        </div>
        <ul className="items-center hidden gap-3 lg:flex ">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="text-sm font-medium text-gray-600"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-white rounded-full bg-secondary max-sm:hidden">
            Advertise Now
          </button>
          <button className="px-4 py-2 text-white rounded-full bg-primary">
            Get the App
          </button>
        </div>
        <button
          className="i-heroicons-bars-3 text-primary size-7 lg:hidden"
          onClick={toggleNav}
        ></button>
        {navOpen && (
          <div className="container fixed inset-0 z-50 flex flex-col gap-12 py-12 lg:hidden bg-primary">
            <button
              className="self-end text-white i-heroicons-x-mark size-7"
              onClick={toggleNav}
            ></button>
            <ul className="space-y-6 ">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    className="font-medium text-white "
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {/* end of navbar */}
      <section className="grid md:grid-cols-2 gap-3 container min-h-[80svh]">
        <div className="content-center space-y-6 max-md:order-2">
          <h1 className="font-semibold text-7xl">
            Sell, earn, own. Build financial freedom with WallPon!
          </h1>
          <p className="text-lg text-gray-500">
            Play a crucial role in expanding our merchant base, increase your
            income with flexible working, and help local businesses grow.
            <div className="font-semibold text-gray-600">
              Become an agent today.
            </div>
          </p>
          <button className="px-4 py-2 text-white rounded-full bg-primary">
            Get Started
          </button>
          <a className="block text-sm font-medium text-primary">
            Already have an account? Login here.
          </a>
        </div>
        <div className="max-md:order-1">
          <img
            role="presentation"
            src="./images/hero_img.png"
            className="object-cover w-full"
          />
        </div>
      </section>
      {/* end of hero */}
      {/* start of section */}
      <section className="bg-white">
        <div className="container grid gap-10 md:grid-cols-2">
          <div>
            <img
              src="./images/section2_img.png"
              role="presentation"
              className="object-cover w-full"
            />
          </div>
          <div className="content-center space-y-6">
            <h2 className="text-4xl font-semibold">
              A work opportunitie beyond the 9-to-5 grind.
            </h2>
            <p className="text-lg font-bold">
              Commissions, residuals, 100% free health care, and ownership in
              Wallpon.
            </p>
            <p className="text-sm text-gray-500">
              Be part of a cutting-edge service that benefits both consumers and
              businesses while earn competitive commissions on every sale you
              make. Enjoy the freedom to manage your own schedule and have
              ownership in Wallpon.
            </p>
          </div>
        </div>
      </section>
      {/* end of section */}
      {/* start of features */}
      <section className="container flex flex-col items-center py-6 space-y-6">
        <div className="px-3 py-1 bg-white rounded text-primary">
          Why Wallpon?
        </div>
        <h2 className="pb-10 text-4xl font-semibold text-center">
          Benefits of being a Wallpon Agent
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 ">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 space-y-5 text-center bg-white rounded-xl"
            >
              <div className="p-2 mx-auto rounded-md bg-surface-50 w-fit">
                <img
                  role="presentation"
                  src={feature.icon}
                  className="object-cover size-10"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
          <div className="content-center p-6 space-y-5 text-center bg-white rounded-xl">
            <h3 className="text-2xl font-semibold text-center text-gray-700 text-balance">
              Are you ready to start your Agent experience at Wallpon?
            </h3>
            <button className="px-4 py-2 text-white rounded-full bg-primary">
              Get Started
            </button>
          </div>
        </div>
      </section>
      {/* end of features */}
      {/* start of requirement */}
      <section className="container py-6 space-y-6">
        <div className="flex flex-col items-center gap-2 ">
          <div className="px-3 py-1 bg-white rounded text-primary">
            Requirements
          </div>
          <h2 className="text-4xl font-semibold text-center">
            What You Need to apply
          </h2>
          <p className="max-w-lg text-sm text-center text-gray-500">
            If you see yourself as a friendly and proactive seller, take a
            moment to review our requirements and join forces with Wallpon.
          </p>
        </div>
        <div className="flex justify-around gap-6 max-md:flex-col ">
          {requirements.map((requirement) => (
            <div
              key={requirement.title}
              className="p-6 space-y-2 text-center rounded-xl"
            >
              <div className="p-2 mx-auto rounded-md bg-surface-100 w-fit">
                <img
                  role="presentation"
                  src={requirement.icon}
                  className="object-cover size-8"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700">
                {requirement.title}
              </h3>
              <p className="text-sm font-medium text-gray-500">
                {requirement.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* end of requirement */}
      {/* start of paid business section */}
      <section className="bg-white">
        <div className="container relative grid gap-2 py-6 md:grid-cols-2">
          <div className="content-center self-center max-w-md space-y-6 max-md:order-2">
            <h3 className="text-4xl font-semibold ">
              Get paid while boosting local businesses
            </h3>
            <p className="text-lg text-gray-600">Apply now!</p>
            <button className="px-4 py-2 text-white rounded-full bg-primary">
              Get Started
            </button>
          </div>
          <div className="top-0 max-md:order-1 md:absolute end-0">
            <img
              role="presentation"
              src="./images/paid_business_img.png"
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>
      {/* end of paid business section */}
      {/* start of Potencial earnings section */}
      <section className="py-6 bg-primary">
        <div className="container">
          <div className="px-3 py-2 rounded bg-white/50 text-primary">
            Potencial earnings
          </div>
          <p className="text-lg text-surface-100">
            As a Wallpon Agent, your earnings can grow significantly. As you
            gain experience and a client base, see your commissions and bonuses
            increase year after year.
          </p>
        </div>
      </section>
      {/* end of Potencial earnings section */}
    </>
  );
}

export default App;
