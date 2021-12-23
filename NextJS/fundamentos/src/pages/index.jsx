import Navigator from "../components/Navigator";

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap',
    }}>
      <Navigator destiny="/app" text="App" color="crimson" />
    </div>
  )
}