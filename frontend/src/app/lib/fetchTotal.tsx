import { useEffect, useState } from "react";

export function fetchTotal() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchTotal = async () => {
      const response = await fetch("URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: "What is the total price of the order?",
          temperature: 0.7,
          max_tokens: 10,
        }),
      });

      const data = await response.json();
      setTotal(data.choices[0].text);
    };

    fetchTotal();
  }, []);

  return total;
}