import { useState } from 'react';
import { base_url } from '../utils/ipify';
import { validateIpAddress } from '../utils/helpers';
import Home from '../components/home-page/home';


export default function HomePage({ details }) {

  const [state, setState] = useState(details);
  const [isLoading, setIsLoading] = useState(false);

  async function onSearchHandler(e) {

    e.preventDefault();

    if (isLoading) return;

    const { input } = e.target.elements;

    if (!input.value)
      return alert("Input cannot be empty!");

    let url = `${base_url}&`;

    if (validateIpAddress(input.value))
      url += `ipAddress=${input.value}`;
    else
      url += `domain=${input.value}`;

    try {
      input.blur();
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok)
        alert(data.messages);
      else {
        input.focus();
        setState(data);
      }

      setIsLoading(false);

    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  }

  return <Home state={state} isLoading={isLoading} onSearchHandler={onSearchHandler} />;
}

export async function getServerSideProps() {
  const res = await fetch(base_url);
  const data = await res.json();
  return {
    props: {
      details: data
    }
  }
}
