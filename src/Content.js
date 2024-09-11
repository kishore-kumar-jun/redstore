import React from 'react'
import { useState } from 'react'


const Content = () => {

  const [first, setfirst] = useState('Just')
  function readm(){
      const paragraphs = ['A subscription is a payment model where consumers pay a regular, recurring fee for access to a product or service, often on a monthly or annual basis. This approach has become widespread in various sectors, from entertainment and media to software and even physical goods. Companies like Netflix, Spotify, and Adobe leverage subscriptions to provide continuous service in exchange for consistent revenue.',
        'Despite the advantages, there are some downsides. Consumers may find themselves subscribed to multiple services, leading to significant ongoing expenses. Additionally, the ease of automatic renewals can result in users continuing to pay for services they no longer actively use',
        'Overall, the subscription model is highly effective for both businesses and consumers. It provides a steady flow of revenue while delivering continuous value to customers, making it a dominant force in the modern economy.','Subscriptions have become an integral part of the modern economy, providing mutual benefits for both providers and consumers. However, users must manage their subscriptions carefully to avoid unnecessary costs.']  
     
      const randomindex= Math.floor(Math.random()* paragraphs.length);
      setfirst(paragraphs[randomindex])
    };

    const [firstparagraph, setParagraph] = useState('Just')
    function readme(){
      const paras=['An Red Store website offers a wide range of services to cater to both businesses and consumers, enhancing the shopping experience. At its core, an Red Store site provides a user-friendly platform for browsing products, comparing prices, and making secure purchases. Features like product search filters, detailed product descriptions, and customer reviews help users make informed buying decisions.',
        'Red Store services often include multiple payment gateways, offering flexibility in transactions through credit cards, digital wallets, and other secure payment options. Additionally, these websites offer order tracking, real-time inventory management, and personalized recommendations based on user behavior, improving customer satisfaction.',
        'Customer support is another key service, often provided via live chat, email, or phone to assist users with queries, product returns, and issues. Many e-commerce platforms also feature loyalty programs, offering discounts or rewards for frequent shoppers.', ]
        const randoms= Math.floor(Math.random()* paras.length);
        setParagraph(paras[randoms]);
    }
  
  return (
    <main>
      <div className="mains">
      <h1 className='rmh'>Gallery</h1>
      <p className='pom'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum tempore quod corrupti ea dolor sit odit excepturi quidem, est omnis sint. Sit debitis quam praesentium nobis omnis facere aperiam blanditiis Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga explicabo voluptate rerum. Eos, adipisci cupiditate, vitae sequi animi accusamus doloremque temporibus non ipsam ipsa sed dignissimos esse optio natus incidunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora possimus rem iure accusamus ab? Inventore vero ipsam nemo, consequatur id quos sit fuga similique dolores magni, quia quidem enim deserunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat veritatis facere beatae cupiditate laborum. Nobis eius dignissimos odio amet soluta quod tenetur unde laborum doloremque rerum. Quasi, facere ducimus. Pariatur. </p>
      </div>
      <div className="container">
      <div className='subscribtion'><h1>Subcription</h1><p>{first} Hit the button to Know The Details. {setfirst}</p> <button className='btns1' onClick={readm}>Read More</button></div><div className='vertical-line'></div> <div className='OtherService'> <h1>Other Services</h1> <p> {firstparagraph} Hit the button to Know The Details.</p> <button className='btns2' onClick={readme} >Read More</button></div>

      </div>
    </main>
  )
}

export default Content
