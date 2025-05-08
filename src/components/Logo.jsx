import logo from '../assets/lululemon-logo.png'

export default function Logo({ width, height }) {
    return (
        <img src={logo} alt="Lululemon logo" style={{ width: width, height: height }} />
    )
}