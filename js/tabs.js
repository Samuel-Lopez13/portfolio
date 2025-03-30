document.addEventListener('DOMContentLoaded', function() {
  const tabBackend = document.getElementById('tab-backend');
  const tabFrontend = document.getElementById('tab-frontend');
  const contentBackend = document.getElementById('content-backend');
  const contentFrontend = document.getElementById('content-frontend');

  tabBackend.addEventListener('click', function() {
    // Activate backend tab
    tabBackend.classList.add('bg-emerald-500');
    tabBackend.classList.remove('bg-zinc-800');
    tabFrontend.classList.add('bg-zinc-800');
    tabFrontend.classList.remove('bg-blue-500');
    
    // Show backend content, hide frontend content
    contentBackend.classList.remove('hidden');
    contentFrontend.classList.add('hidden');
  });

  tabFrontend.addEventListener('click', function() {
    // Activate frontend tab
    tabFrontend.classList.add('bg-blue-500');
    tabFrontend.classList.remove('bg-zinc-800');
    tabBackend.classList.add('bg-zinc-800');
    tabBackend.classList.remove('bg-emerald-500');
    
    // Show frontend content, hide backend content
    contentFrontend.classList.remove('hidden');
    contentBackend.classList.add('hidden');
  });
}); 