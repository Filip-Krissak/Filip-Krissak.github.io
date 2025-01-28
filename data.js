const quizData = [
    {
      question: "What is the powerhouse of the cell?",
      options: [
        "Nucleus",
        "Mitochondria",
        "Ribosome",
        "Golgi apparatus",
        "Lysosome",
        "Chloroplast",
        "Endoplasmic reticulum",
        "Cytoplasm"
      ],
      correct: [1]
    },
    {
      question: "Which of the following are types of RNA?",
      options: [
        "mRNA",
        "tRNA",
        "rRNA",
        "snRNA",
        "DNA",
        "siRNA",
        "miRNA",
        "cRNA"
      ],
      correct: [0, 1, 2, 3, 5, 6]
    },
    {
      question: "What is the main function of red blood cells?",
      options: [
        "Transport oxygen",
        "Fight infections",
        "Clot blood",
        "Regulate temperature",
        "Carry nutrients",
        "Store iron",
        "Produce antibodies",
        "Transmit signals"
      ],
      correct: [0]
    },
    {
      question: "Which organ is responsible for detoxifying chemicals in the blood?",
      options: [
        "Heart",
        "Lungs",
        "Liver",
        "Kidneys",
        "Spleen",
        "Stomach",
        "Pancreas",
        "Gallbladder"
      ],
      correct: [2]
    },
    {
      question: "What structures are found in plant cells but not in animal cells?",
      options: [
        "Cell wall",
        "Chloroplast",
        "Mitochondria",
        "Vacuole",
        "Ribosome",
        "Plasma membrane",
        "Golgi apparatus",
        "Cytoplasm"
      ],
      correct: [0, 1, 3]
    },
    {
      question: "Which of these are macronutrients?",
      options: [
        "Carbohydrates",
        "Proteins",
        "Fats",
        "Vitamins",
        "Minerals",
        "Water",
        "Fiber",
        "Cholesterol"
      ],
      correct: [0, 1, 2, 5]
    },
    {
      question: "What are the components of a nucleotide?",
      options: [
        "Phosphate group",
        "Deoxyribose sugar",
        "Ribose sugar",
        "Nitrogenous base",
        "Amino acid",
        "Peptide bond",
        "Hydrogen bond",
        "Lipids"
      ],
      correct: [0, 1, 3]
    },
    {
      question: "Which of the following are types of muscle tissue?",
      options: [
        "Skeletal",
        "Cardiac",
        "Smooth",
        "Connective",
        "Epithelial",
        "Nervous",
        "Adipose",
        "Bone"
      ],
      correct: [0, 1, 2]
    },
    {
      question: "Which substances are enzymes?",
      options: [
        "Amylase",
        "Lipase",
        "Pepsin",
        "Hemoglobin",
        "Insulin",
        "Glucagon",
        "DNA polymerase",
        "Myosin"
      ],
      correct: [0, 1, 2, 6]
    },
    {
      question: "What are the primary components of the cell membrane?",
      options: [
        "Phospholipids",
        "Proteins",
        "Carbohydrates",
        "Cholesterol",
        "Nucleic acids",
        "Glycoproteins",
        "Lipids",
        "Water"
      ],
      correct: [0, 1, 3, 5]
    },
    {
      question: "Which organisms perform photosynthesis?",
      options: [
        "Plants",
        "Algae",
        "Fungi",
        "Cyanobacteria",
        "Animals",
        "Protozoa",
        "Viruses",
        "Mosses"
      ],
      correct: [0, 1, 3, 7]
    },
    {
      question: "Which of the following are found in the human skeletal system?",
      options: [
        "Femur",
        "Tibia",
        "Radius",
        "Ulna",
        "Patella",
        "Scapula",
        "Cranium",
        "Clavicle"
      ],
      correct: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    {
      question: "What are the main phases of the cell cycle?",
      options: [
        "G1 phase",
        "S phase",
        "G2 phase",
        "M phase",
        "C phase",
        "P phase",
        "A phase",
        "T phase"
      ],
      correct: [0, 1, 2, 3]
    },
    {
      question: "Which of these are examples of homeostasis?",
      options: [
        "Regulating body temperature",
        "Maintaining blood sugar levels",
        "Balancing water content",
        "Controlling blood pressure",
        "Growing in size",
        "Healing a wound",
        "Digesting food",
        "Excreting waste"
      ],
      correct: [0, 1, 2, 3]
    },
    {
      question: "Which elements are essential for life?",
      options: [
        "Carbon",
        "Hydrogen",
        "Oxygen",
        "Nitrogen",
        "Calcium",
        "Phosphorus",
        "Sodium",
        "Potassium"
      ],
      correct: [0, 1, 2, 3, 4, 5]
    },
    {
      question: "What is the function of the lymphatic system?",
      options: [
        "Transport oxygen",
        "Fight infections",
        "Drain excess fluid",
        "Absorb dietary fats",
        "Regulate hormones",
        "Produce red blood cells",
        "Store vitamins",
        "Excrete waste"
      ],
      correct: [1, 2, 3]
    },
    {
      question: "What are the properties of water that support life?",
      options: [
        "High specific heat",
        "Cohesion",
        "Adhesion",
        "Solvent properties",
        "Density anomaly",
        "Transparency",
        "Viscosity",
        "Odorlessness"
      ],
      correct: [0, 1, 2, 3, 4, 5]
    },
    {
      question: "Which of the following are types of ecosystems?",
      options: [
        "Forest",
        "Desert",
        "Ocean",
        "Grassland",
        "Tundra",
        "Wetland",
        "Freshwater",
        "Savanna"
      ],
      correct: [0, 1, 2, 3, 4, 5, 6, 7]
    },
    {
      question: "Which of these processes are forms of asexual reproduction?",
      options: [
        "Binary fission",
        "Budding",
        "Fragmentation",
        "Parthenogenesis",
        "Meiosis",
        "Fertilization",
        "Mitosis",
        "Spore formation"
      ],
      correct: [0, 1, 2, 3, 7]
    },
    {
      question: "What are the levels of biological organization?",
      options: [
        "Cell",
        "Tissue",
        "Organ",
        "Organ system",
        "Organism",
        "Population",
        "Community",
        "Ecosystem"
      ],
      correct: [0, 1, 2, 3, 4, 5, 6, 7]
    }
  ];
  