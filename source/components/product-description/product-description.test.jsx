import React from 'react';
import ProductDescription from './product-description.jsx';

const Content = [
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet a, doloribus, ea tempore corrupti atque, architecto modi eum quisquam totam, doloremque aut provident nisi excepturi quibusdam. Facilis laudantium unde, deserunt dolores quidem sint beatae numquam explicabo ab ea quod possimus odit quam, repudiandae enim. Quas quia nesciunt nisi quidem molestias?</p>,
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae asperiores corrupti, dolore harum illum aperiam.</p>
];

export default [{
	name: "Default",
	component: (
		<ProductDescription title="Bundle No. AAAA" href="#/">
			{Content}
		</ProductDescription>
	)
}, {
	name: "Narrow",
	component: (
		<ProductDescription title="Bundle No. B" href="#/" className="product-description--narrow">
			{Content}
		</ProductDescription>
	)
}, {
	name: "Wide",
	component: (
		<ProductDescription title="Bundle No. C" href="#/" className="product-description--wide">
			{Content}
		</ProductDescription>
	)
}]