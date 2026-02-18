<?php
// Completed and ongoing projects data (static array for migration)
$completedProjects = [
  [
    'title' => 'Kaduna Smart City Solar Initiative',
    'category' => 'Solar Installation',
    'location' => 'Kaduna State',
    'description' => 'Led solar grid installation across 13 public schools as part of the Kaduna Smart City Project. Employed 10+ youths and trained numerous individuals in renewable energy solutions for sustainable development.',
    'status' => 'Completed',
    'year' => '2024',
    'images' => ['kaduna-smart-city-1.jpg', 'kaduna-smart-city-2.jpg'],
    'highlights' => ['13 Public Schools', '10+ Youth Employment', 'Renewable Energy Training']
  ],
  [
    'title' => 'Youth Training & Outreach Program',
    'category' => 'Skills Training & Development',
    'location' => 'Kaduna State Communities',
    'description' => 'Comprehensive training initiative for youths, fresh graduates, interns, and students across Kaduna State communities. The program combines classroom-based theoretical training with hands-on practical construction site experience, covering construction techniques, safety protocols, blueprint reading, and engineering fundamentals.',
    'status' => 'Completed',
    'year' => '2025',
    'images' => ['training-outreach-1.jpg', 'training-outreach-2.jpg', 'training-outreach-3.jpg', 'training-outreach-4.jpg', 'training-outreach-5.jpg', 'training-outreach-6.jpg'],
    'highlights' => ['100+ Participants', 'Practical Training', 'Community Empowerment']
  ],
  [
    'title' => 'Nigerian Navy Officers Accommodation Block',
    'category' => 'Military Infrastructure',
    'location' => 'Kachia, Kaduna State',
    'description' => 'Construction of 2x16 accommodation block for Nigerian Navy Officers at Kachia. The project encompasses complete structural works including foundation, reinforced concrete columns, flooring systems, protective coverings, window installations, and comprehensive infrastructure development.',
    'status' => 'Completed',
    'year' => '2025',
    'images' => ['navy-accommodation-1.jpg', 'navy-accommodation-2.jpg', 'navy-accommodation-3.jpg', 'navy-accommodation-4.jpg', 'navy-accommodation-5.jpg', 'navy-accommodation-6.jpg', 'navy-accommodation-7.jpg', 'navy-accommodation-8.jpg'],
    'highlights' => ['32 Units', 'Military Grade', 'Complete Infrastructure']
  ],
  [
    'title' => 'Construction of 2 VIP ',
    'category' => 'Building & Construction',
    'location' => 'Kagarko LGA of Kaduna State',
    'description' => 'Construction of 2 VIP Latrines at Primary Healthcare Center.',
    'status' => 'Completed',
    'year' => '2021',
    'images' => ['VIP1.jpeg','VIP2.jpeg','VIP3.jpeg','VIP4.jpeg','VIP5.jpeg'],
    'highlights' => []
  ],
  [
    'title' => 'Water Well Development',
    'category' => 'Borehole Drilling',
    'location' => 'Kaduna State',
    'description' => 'Deep borehole drilling and water well development for community access.',
    'status' => 'Completed',
    'year' => '2023',
    'images' => ['water-systems.jpg'],
    'highlights' => []
  ],
  [
    'title' => 'Environmental Assessment',
    'category' => 'Environmental Consultancy',
    'location' => 'Kaduna',
    'description' => 'Comprehensive environmental impact assessment and management plan.',
    'status' => 'Completed',
    'year' => '2022',
    'images' => ['environmental-management.jpg'],
    'highlights' => []
  ]
];
$ongoingProjects = [
  [
    'title' => 'Construction of Retaining Wall',
    'category' => 'Civil Engineering',
    'location' => 'Kaduna State',
    'description' => 'Ongoing construction of a reinforced concrete retaining wall to prevent soil erosion and provide structural support. Project includes excavation, formwork, reinforcement, and concrete works.',
    'status' => 'Ongoing',
    'progress' => 40,
    'images' => ['K1.jpeg','K2.jpeg','K3.jpeg','K4.jpeg','K5.jpeg','K6.jpeg']
  ],
  [
    'title' => 'Construction of 20 Units 5 Bedrooms Terrace',
    'category' => 'Building Construction (Consultancy)',
    'location' => 'Kaduna State',
    'description' => 'Ongoing construction of 20 units of 5-bedroom terrace houses. IKS Nigeria is acting as the project consultant, overseeing quality, compliance, and project management.',
    'status' => 'Ongoing',
    'progress' => 25,
    'images' => ['L1.jpeg','L2.jpeg','L3.jpeg','L4.jpeg']
  ]
];
?>

<section style="padding: 3rem 0; background: #f8fafc;">
  <div style="max-width: 1100px; margin: 0 auto; padding: 0 1rem;">
    <h2 style="font-size: 2rem; font-weight: bold; color: #1e293b; margin-bottom: 2rem;">Completed Projects</h2>
    <?php foreach ($completedProjects as $project): ?>
      <div style="background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #0001; margin-bottom: 2rem; overflow: hidden; display: flex; flex-wrap: wrap;">
        <div style="flex: 1 1 300px; min-width: 300px; max-width: 400px;">
          <img src="/iksphp/public/images/<?php echo $project['images'][0]; ?>" alt="<?php echo htmlspecialchars($project['title']); ?>" style="width: 100%; height: 220px; object-fit: cover;">
        </div>
        <div style="flex: 2 1 400px; padding: 2rem;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #334155; margin-bottom: 0.5rem;"> <?php echo htmlspecialchars($project['title']); ?> </h3>
          <p style="color: #64748b; font-weight: 500; margin-bottom: 0.5rem;"> <?php echo htmlspecialchars($project['category']); ?> </p>
          <span style="background: #e0e7ef; color: #334155; border-radius: 999px; padding: 0.25rem 1rem; font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem; display: inline-block;"> <?php echo htmlspecialchars($project['status']); ?> </span>
          <p style="color: #475569; margin-bottom: 1rem;"> <?php echo htmlspecialchars($project['description']); ?> </p>
          <?php if (!empty($project['highlights'])): ?>
            <ul style="display: flex; gap: 1rem; margin-bottom: 1rem;">
              <?php foreach ($project['highlights'] as $highlight): ?>
                <li style="background: #f1f5f9; border-radius: 6px; padding: 0.5rem 1rem; color: #334155; font-size: 0.95rem; font-weight: 500;"> <?php echo htmlspecialchars($highlight); ?> </li>
              <?php endforeach; ?>
            </ul>
          <?php endif; ?>
          <div style="display: flex; justify-content: space-between; color: #64748b; font-size: 0.95rem;">
            <span>📍 <?php echo htmlspecialchars($project['location']); ?></span>
            <span><?php echo htmlspecialchars($project['year']); ?></span>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</section>

<section style="padding: 3rem 0; background: #f1f5f9;">
  <div style="max-width: 1100px; margin: 0 auto; padding: 0 1rem;">
    <h2 style="font-size: 2rem; font-weight: bold; color: #1e293b; margin-bottom: 2rem;">Ongoing Projects</h2>
    <?php foreach ($ongoingProjects as $project): ?>
      <div style="background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #0001; margin-bottom: 2rem; overflow: hidden; display: flex; flex-wrap: wrap;">
        <div style="flex: 1 1 300px; min-width: 300px; max-width: 400px;">
          <img src="/iksphp/public/images/<?php echo $project['images'][0]; ?>" alt="<?php echo htmlspecialchars($project['title']); ?>" style="width: 100%; height: 220px; object-fit: cover;">
        </div>
        <div style="flex: 2 1 400px; padding: 2rem;">
          <h3 style="font-size: 1.5rem; font-weight: bold; color: #334155; margin-bottom: 0.5rem;"> <?php echo htmlspecialchars($project['title']); ?> </h3>
          <p style="color: #64748b; font-weight: 500; margin-bottom: 0.5rem;"> <?php echo htmlspecialchars($project['category']); ?> </p>
          <span style="background: #fbbf24; color: #fff; border-radius: 999px; padding: 0.25rem 1rem; font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem; display: inline-block;"> <?php echo htmlspecialchars($project['status']); ?> </span>
          <p style="color: #475569; margin-bottom: 1rem;"> <?php echo htmlspecialchars($project['description']); ?> </p>
          <div style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.95rem; margin-bottom: 0.25rem;">
              <span style="color: #64748b; font-weight: 500;">Progress</span>
              <span style="color: #fbbf24; font-weight: 600;"> <?php echo $project['progress']; ?>% </span>
            </div>
            <div style="width: 100%; height: 10px; background: #e0e7ef; border-radius: 6px; overflow: hidden;">
              <div style="height: 100%; background: linear-gradient(90deg, #fbbf24, #64748b); border-radius: 6px; width: <?php echo $project['progress']; ?>%; transition: width 0.5s;"></div>
            </div>
          </div>
          <div style="display: flex; justify-content: space-between; color: #64748b; font-size: 0.95rem;">
            <span>📍 <?php echo htmlspecialchars($project['location']); ?></span>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</section>
