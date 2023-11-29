export default function Login() {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <div className='card w-96 bg-teal-950 text-primary-content'>
            <div className='card-body'>
              <h2 className='card-title text-white mb-2'>Welcome</h2>
              <input
                type='text'
                placeholder='Username or Email'
                className='input input-bordered w-full max-w-xs text-white'
              />
              <input
                type='text'
                placeholder='Password'
                className='input input-bordered w-full max-w-xs text-white'
              />
              <div className='card-actions mt-2'>
                <button className='btn w-full'>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
