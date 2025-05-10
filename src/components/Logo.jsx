import logo from '../assets/lululemon-logo.png'

export default function Logo({ width, height }) {
    return (
        <img src={logo} alt="Lululemon logo" style={{ margin: "0.1rem 0 0 0", width: width, height: height }} />
    )
}