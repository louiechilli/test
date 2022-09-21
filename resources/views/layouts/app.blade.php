<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'FeedtheWeb') }}</title>

    <!-- Styles -->
    <link href="{{ asset('assets/front/css/app.css') }}" rel="stylesheet">

    <script>
        
    </script>

    <!-- Vendor CSS Files -->
    <link href="{{ asset('assets/front/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/front/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/front/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/front/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/front/vendor/remixicon/remixicon.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/front/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('assets/front/vendor/aos/aos.js') }}"></script>
    <link href="{{ asset('assets/front/vendor/aos/aos.css') }}" rel="stylesheet">

    <!-- Favicons -->
    <link href="{{ asset('assets/images/favicon.png') }}" rel="icon">
    <link href="{{ asset('assets/images/apple-touch-icon.png') }}" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="{{ asset('assets/front/css/style.css') }}" rel="stylesheet">


    <script>

$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 1) {
		$('#header').addClass('scrolled');
	} else {
		$('#header').removeClass('scrolled');
	}
});
    </script>


</head>
<script>
    $(function() {
    AOS.init();
  });
  window.addEventListener('load', AOS.refresh)
</script>
<body>
<div id="app">

    <main>
        <div class="nav-top"></div>
        @yield('content')
    </main>

    <!--<div id="preloader"></div>-->
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS File -->
    <script src="{{ asset('assets/front/vendor/purecounter/purecounter_vanilla.js') }}"></script>
    <script src="{{ asset('assets/front/js/main.js') }}"></script>
    <script src="{{ asset('assets/front/vendor/glightbox/js/glightbox.min.js') }}"></script>
    <script src="{{ asset('assets/front/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>
    <script src="{{ asset('assets/front/vendor/swiper/swiper-bundle.min.js') }}"></script>
    <script src="{{ asset('assets/front/vendor/php-email-form/validate.js') }}"></script>
    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
    <script src="{{ asset('assets/front/js/app.js') }}" defer></script>
</div>
</body>
</html>